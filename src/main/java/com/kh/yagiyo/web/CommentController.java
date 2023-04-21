package com.kh.yagiyo.web;

import com.kh.yagiyo.domain.board.svc.CommentSVC;
import com.kh.yagiyo.domain.board.svc.boardSVC;
import com.kh.yagiyo.web.form.board.BoardForm;
import com.kh.yagiyo.web.form.board.CommentDTO;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.awt.print.Pageable;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequiredArgsConstructor
@RequestMapping("/comment")
public class CommentController {
  private final CommentSVC commentSVC;
  private final boardSVC boardSVC;

  @GetMapping("/board/{boardId}")
  public String showBoardPage(@PathVariable Long boardId, Model model) {
    // 게시글 정보를 조회하고 모델에 추가
    BoardForm board = boardSVC.findById(boardId);
    model.addAttribute("board", board);

    // 해당 게시글의 댓글 목록을 조회하여 모델에 추가
    List<CommentDTO> comments = commentSVC.findAll(boardId);
    model.addAttribute("comments", comments);

    // 게시글 상세 페이지를 표시하는 뷰 이름을 리턴
    return "board/boardDetail";
  }

  @PostMapping("/save")
  public ResponseEntity save(@ModelAttribute CommentDTO commentDTO) {
    System.out.println("commentDTO = " + commentDTO);
    Long saveResult = commentSVC.save(commentDTO);
    if (saveResult != null) {
      List<CommentDTO> commentDTOList = commentSVC.findAll(commentDTO.getBoardId());
      return new ResponseEntity<>(commentDTOList, HttpStatus.OK);
    } else {
      return new ResponseEntity<>("해당 게시글이 존재하지 않습니다.", HttpStatus.NOT_FOUND);
    }
  }

  @DeleteMapping("/delete")
  public ResponseEntity<List<CommentDTO>> delete(@RequestParam("commentId") Long id, @RequestParam("boardId") Long boardId) {
    commentSVC.delete(id);
    List<CommentDTO> commentDTOList = commentSVC.findAll(boardId);
    return new ResponseEntity<>(commentDTOList, HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public List<CommentDTO> getComments(@PathVariable Long id) {
    List<CommentDTO> commentDTOList = commentSVC.findAll(id);
    return commentDTOList;
  }

}