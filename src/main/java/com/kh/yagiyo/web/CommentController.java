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

  @GetMapping("/list/{boardId}")
  public ResponseEntity<List<CommentDTO>> getComments(@PathVariable Long boardId) {
    List<CommentDTO> commentDTOList = commentSVC.findAll(boardId);
    return new ResponseEntity<>(commentDTOList, HttpStatus.OK);
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
}