import type { Metadata } from 'next'
import React from "react";
import { Suspense } from "react";


export const metadata: Metadata = {
    title: 'Enterprise Chai',
    description: 'Enterprise Chai',
}
export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Suspense>{children}</Suspense>
            </body>
        </html>
    )
}
