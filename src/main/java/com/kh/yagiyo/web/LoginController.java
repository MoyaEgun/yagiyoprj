package com.kh.yagiyo.web;

import com.kh.yagiyo.domain.common.mail.MailService;
import com.kh.yagiyo.domain.common.util.PasswordGenerator;
import com.kh.yagiyo.domain.entity.Member;
import com.kh.yagiyo.domain.member.svc.MemberSVC;
import com.kh.yagiyo.domain.member.svc.RegisterMail;
import com.kh.yagiyo.domain.member.svc.RegisterMail2;
import com.kh.yagiyo.web.form.login.LoginForm;
import com.kh.yagiyo.web.form.member.FindIdForm;
import com.kh.yagiyo.web.form.member.FindPWForm;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.Optional;
import java.util.Random;

@Slf4j
@Controller
@RequiredArgsConstructor
public class LoginController {

  private final MemberSVC memberSVC;

  private final MailService ms;

  private final RegisterMail2 registerMail2;

  //로그인화면
  @GetMapping("/login")
  public String loginForm(Model model) {
    model.addAttribute("loginForm", new LoginForm());
    return "login";
  }

  //로그인처리
  @PostMapping("/login")
  public String login(
          @Valid @ModelAttribute LoginForm loginForm,
          BindingResult bindingResult,
          HttpServletRequest httpServletRequest,
          @RequestParam(value = "redirectUrl", required = false, defaultValue = "/") String redirectUrl
  ) {

    log.info("redirectUrl={}", redirectUrl);
    if (bindingResult.hasErrors()) {
      log.info("bindingResult={}", bindingResult);
      return "login";
    }

    //1)아이디 존재유무
    if (!memberSVC.isExist(loginForm.getId())) {
      bindingResult.rejectValue("id", "login", "아이디가 존재하지 않습니다.");
      return "login";
    }

    //2)로그인
    Optional<Member> member = memberSVC.login(loginForm.getId(), loginForm.getPw());
    if (member.isEmpty()) {
      bindingResult.rejectValue("pw", "login", "비밀번호가 일치하지 않습니다.");
      return "login";
    }

    //3)세션 생성
    //세션이 있으면 해당 정보를 가져오고 없으면 세션생성
    HttpSession session = httpServletRequest.getSession(true);
    LoginMember loginMember = new LoginMember(
            member.get().getMemberId(),
            member.get().getId(),
            member.get().getPw(),
            member.get().getNick(),
            member.get().getEmail(),
            member.get().getGender(),
            member.get().getAge(),
            member.get().getGubun());
    session.setAttribute(SessionConst.LOGIN_MEMBER, loginMember);

    return "redirect:" + redirectUrl;
  }

  //로그아웃
  @GetMapping("logout")
  public String logout(HttpServletRequest HttpServletRequest) {
    //세션이 있으면 해당 정보를 가져오고 없으면 세션생성 하지 않음
    HttpSession session = HttpServletRequest.getSession(false);
    if (session != null) {
      session.invalidate();   //세션 제거
    }
    return "redirect:/";
  }

  //마이페이지
  @GetMapping("/mypage")
  public String mypage() {
    return "/member/mypage";
  }

  //아이디 찾기
  @GetMapping("/findId")
  public String findIdForm(Model model) {
    model.addAttribute("findIdForm", new FindIdForm());
    return "member/findId";
  }

  @PostMapping("/findId")
  public String findId(
          @Valid @ModelAttribute FindIdForm findIdForm,
          BindingResult bindingResult,
          Model model) {
    if (bindingResult.hasErrors()) {
      return "member/findId";
    }
    String email = findIdForm.getEmail();
    Optional<String> optionalMember = memberSVC.findEmailById(email);
    if (optionalMember.isPresent()) {
      String id = optionalMember.get();
      FindIdForm result = new FindIdForm();
      result.setId(id);
      model.addAttribute("findIdForm", result);
    } else {
      model.addAttribute("message", "해당 이메일과 연결된 회원 정보를 찾을 수 없습니다.");
    }
    return "member/findId";
  }

  //이메일 인증해서 비밀번호 찾기
  @GetMapping("/findPW")
  public String findPWForm(@ModelAttribute FindPWForm findPWForm) {
    return "member/findPW";
  }

  @PostMapping("/findPW")
  public String findPW(@Valid @ModelAttribute FindPWForm findPWForm,
                       RedirectAttributes redirectAttributes,
                       @RequestParam("email") String email) throws Exception {

    boolean isExist = memberSVC.isExistByEmailAndId(findPWForm.getEmail(), findPWForm.getId());
    if (!isExist) {
      redirectAttributes.addFlashAttribute("message", "해당 회원 정보를 찾을 수 없습니다.");
      return "redirect:/findPW";
    }

    String code = registerMail2.sendSimpleMessage(email);
    System.out.println("임시 비밀번호 : " + code);
    memberSVC.changePasswd(findPWForm.getEmail(), code);

    redirectAttributes.addFlashAttribute("message", "임시 비밀번호가 발송되었습니다. 이메일을 확인해주세요.");
    return "redirect:/findPW";
  }
}