import Artisan_View_Modal from '@/views/artisan_view/artisan_view_component/Artisan_View_Modal'
import { Fragment } from 'react';

export default function RootLayout({ children }) {
  return (
    <Fragment>
        <Artisan_View_Modal>
            {children}
        </Artisan_View_Modal>
    </Fragment>
  );
}