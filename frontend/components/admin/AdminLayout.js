import Link from 'next/link'
import React from 'react'

export default function AdminLayout({ children }) {
    return (
        <>
            <div className="d-flex" id="wrapper">
                {/* Sidebar*/}
                <div className="border-end bg-white" id="sidebar-wrapper">
                    <div className="sidebar-heading border-bottom bg-light p-3">Admin</div>
                    <div className="list-group list-group-flush">
                        <Link legacyBehavior href="/admin">
                            <a className="list-group-item list-group-item-action list-group-item-light p-3">Dashboard</a>
                        </Link>
                        <Link legacyBehavior href="/admin/addproduct">
                            <a className="list-group-item list-group-item-action list-group-item-light p-3">Add Product</a>
                        </Link>
                        <Link legacyBehavior href="/admin/updateproduct">
                            <a className="list-group-item list-group-item-action list-group-item-light p-3">Update Product</a>
                        </Link>
                    </div>
                </div>
                {/* Page content wrapper*/}
                <div id="page-content-wrapper">
                    <main className="mt-5">
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}
