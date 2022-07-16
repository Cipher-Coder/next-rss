const Footer = () => (
  <footer>
    © {new Date().getFullYear()}{' '}
    <a href="https://getunedited.com">Unedited Labs</a>, Built with{' '}
    <a href="https://nextjs.org">NextJS</a>
    <style jsx>
      {`
        footer {
          text-align: center;
          background-color: #333;
          color: #e2e2e2;
          padding: 0.9rem;
          font-size: 0.75rem;
          width: 100%;
        }
      `}
    </style>
  </footer>
)

export default Footer
