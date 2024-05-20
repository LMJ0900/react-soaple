import React from "react";
import Comment from "./Comment";


const comments = [
    {
        name: "이민재",
        comment : "안녕하세요"
    },
    {
        name: "삼민재",
        comment : "안녕하세요2"
    },
    {
        name: "사민재",
        comment : "안녕하세요3"
    },
];



function CommentList(props){
    return(
        <div>
            {comments.map((comment)=>{
                return(
                    <Comment name={comment.name} comment={comment.comment}/>
                )
            })}
        </div>
    );
}

export default CommentList;