import React from 'react'
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function UserFilter({ props }) {
    const [nama, setNama] = useState("");
    const router = useRouter();

    function test(e) {
        e.preventDefault();
        router.push({
            pathname: "/product",
            query: { 'nama': nama }
        })
    }
    return (
        <>
            <div className="container mb-5">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <form className="form" onSubmit={test}>
                            <i className="bx bx-search" />
                            <input type="text" className="form-control form-input" value={nama}
                                onChange={(e) => setNama(nama => e.target.value)} placeholder="Search anything..." />
                            <span className="left-pan"><i className="bx bx-microphone" /></span>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}
