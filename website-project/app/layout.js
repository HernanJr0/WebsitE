import '@styles/globals.css'
import { children } from 'react'

export const metadata = {
    title: "WebsitE",
    description: 'Buying Gift-Cards has never been this easier!'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>

            </div>

            <main className='app'>
                {children}
            </main>

        </body>
    </html>
  )
}

export default RootLayout
