import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';
import { NAV_LINKS } from '../data/content';
import './Header.css';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e) => {
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      setMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header-inner">
        <a href="#home" className="logo" onClick={handleNavClick}>
          Anas Aktaa
        </a>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? (
              <span className="theme-icon" aria-hidden>☀️</span>
            ) : (
              <span className="theme-icon" aria-hidden>🌙</span>
            )}
          </button>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
