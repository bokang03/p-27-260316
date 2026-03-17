"use client"
import { useParams } from "next/navigation";

export default function Home() {
    const {id} = useParams();
    return (
        <>
        <div className="flex flex-col gap-8 items-center">
                <h1>{id}번 글 상세페이지</h1>
                <div>
                    <h1>제목</h1>
                    <div>내용</div>
                </div>
            </div>
        </>
    );
}
