import React from 'react'
import AdminLayout from '@/components/admin/AdminLayout'
import CreateProduct from '@/components/admin/CreateProduct'

export default function addproduct() {
    return (
        <>
            <AdminLayout>
                <CreateProduct/>
            </AdminLayout>
        </>
    )
}
