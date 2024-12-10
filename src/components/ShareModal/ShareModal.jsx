import React from 'react'
import copyIcon from '../../icons/copy.svg'
import iconVk from '../../icons/vk.svg'
import iconWhatsapp from '../../icons/whatsapp.svg'
import iconFacebook from '../../icons/facebook.svg'
import iconTg from '../../icons/telegram.svg'
import styles from './ShareModal.module.scss'

function ShareModal({ onClose, onCopy }) {

  const socialLinks = [
    { href: '', icon: copyIcon, alt: 'Copy', onclick: 'copyIcon' },
    { href: 'https://vk.com', icon: iconVk, alt: 'VK', onclick: '' },
    { href: 'https://telegram.org', icon: iconTg, alt: 'Telegram', onclick: '' },
    { href: 'https://www.whatsapp.com', icon: iconWhatsapp, alt: 'WhatsApp', onclick: '' },
    { href: 'https://www.facebook.com', icon: iconFacebook, alt: 'Facebook', onclick: '' }
  ]
  return (
    <div className={`window ${styles['move-bottom']}`}>
      <div className="window__wrap" onClick={onClose}></div>
      <div className={styles.window__share}>
        {socialLinks.map(({ href, icon, alt }) => (
          <div key={alt}>
            <a href={href} target="_blank" rel="noopener noreferrer" onClick={onclick}>
              <img src={icon} alt={alt} />
            </a>
          </div>
        ))}

      </div>
    </div>
  )
}

export default ShareModal
