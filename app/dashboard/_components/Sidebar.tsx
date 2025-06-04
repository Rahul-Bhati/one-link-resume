import { Progress } from '@/components/ui/progress'
import { Layout, Plus, Shield } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import UploadPdf from './UploadPdf'

const Sidebar = () => {
    return (
        <div className='shadow-md h-screen p-7'>
            <Link href={"/"}>
                <Image src={"/logo.svg"} width={100} height={100} alt='logo' />
            </Link>
            <div className='mt-10'>
                <UploadPdf >
                    <h1 className='w-full'><Plus /> Upload PDF</h1>
                </UploadPdf>

                <div className='flex gap-3 items-center p-3 mt-5 hover:bg-slate-100 rounded-lg cursor-pointer'>

                    <Layout /> <h2>Workspace</h2>

                </div>

                <div className='flex gap-3 items-center p-3 mt-2 hover:bg-slate-100 rounded-lg cursor-pointer'>
                    <Shield /> <h2>Upgrade</h2>
                </div>
            </div>
            <div className='absolute bottom-10 w-[75%]'>
                <Progress value={33} />
                <p className='text-sm pt-1'>2 out of 5 Pdf uploaded</p>
                <p className='text-sm pt-2 text-gray-400'>upgrade to Upload more PDF</p>
            </div>
        </div>
    )
}

export default Sidebar