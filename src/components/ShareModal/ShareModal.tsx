import React from 'react'
import copyIcon from '@/icons/copy.svg'
import iconVk from '@/icons/vk.svg'
import iconWhatsapp from '@/icons/whatsapp.svg'
import iconFacebook from '@/icons/facebook.svg'
import iconTg from '@/icons/telegram.svg'
import styles from './ShareModal.module.scss'

interface SocialLink {
  href: string
  icon: string
  alt: string
  onClick?: () => void
}

interface ShareModalProps {
  onClose: () => void
  onCopy: () => void
}

const ShareModal: React.FC<ShareModalProps> = ({ onClose, onCopy }) => {
  const socialLinks: SocialLink[] = [
    { href: '', icon: copyIcon, alt: 'Copy', onClick: onCopy },
    { href: 'https://vk.com', icon: iconVk, alt: 'VK' },
    { href: 'https://telegram.org', icon: iconTg, alt: 'Telegram' },
    { href: 'https://www.whatsapp.com', icon: iconWhatsapp, alt: 'WhatsApp' },
    { href: 'https://www.facebook.com', icon: iconFacebook, alt: 'Facebook' }
  ]

  return (
    <div className={`window ${styles['move-bottom']}`}>
      <div className="window__wrap" onClick={onClose}></div>
      <div className={styles.window__share}>
        {socialLinks.map(({ href, icon, alt, onClick }) => (
          <div key={alt}>
            <a
              href={href || '#'}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClick}
            >
              <img src={icon} alt={alt} />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShareModal
