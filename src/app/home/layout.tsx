import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Aside from "@/components/Aside";

export const metadata: Metadata = {
    title: 'Enterprise Chai',
    description: 'Enterprise Chai',
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
            <div className="flex h-screen">
                <Aside />
                {children}
            </div>
            </body>
        </html>
    )
}
