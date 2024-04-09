import React, { useEffect, useState } from "react";
import { BsYoutube, BsSearch } from 'react-icons/bs'
import { Link, useNavigate, useParams } from "react-router-dom";

export default function SearchHeader() {
    const { keyword } = useParams()
    const [text, setText] = useState('')
    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault()
        navigate(`/videos/${text}`)
    }
    useEffect(() => {
        setText(keyword || '')
    }, [keyword])
    return (
        <header>
            <Link to='/'>
                <BsYoutube />
                <h1>Mytube</h1>
            </Link>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search..." value={text} onChange={(e) => setText(e.target.value)} />
                <button>
                    <BsSearch />
                </button>
            </form>
        </header>
    )
}