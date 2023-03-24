import React,{memo} from 'react'
import ScrollToTop from 'react-scroll-to-top';

function BackToTopButton() {

  return (
    <ScrollToTop smooth />
  )
}

export default memo(BackToTopButton)