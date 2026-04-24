import React from 'react'

function layout({ children }) {
    return (
        /* Apply the attribute here to silence the extension-driven mismatch */
        <html lang="en" suppressHydrationWarning>
            <body className="min-h-full flex flex-col justify-center items-center h-full">
                <h1>Hello Layout from about layout</h1>
                {children}
            </body>
        </html>
    );
}

export default layout