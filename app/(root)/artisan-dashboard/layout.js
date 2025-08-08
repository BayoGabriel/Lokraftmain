import Artisan_View_Modal from '@/views/artisan_view/artisan_view_component.jsx/Artisan_View_Modal'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
          <Artisan_View_Modal>
            {children}
          </Artisan_View_Modal>
      </body>
    </html>
  );
}