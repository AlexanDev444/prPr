import React, { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { classNames } from 'shared/lib/classNames/classNames'

export const App = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>toMain</Link>
      <Link to={'/about'}>toAbout</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/'} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}
