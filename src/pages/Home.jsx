const Home = () => {
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img className="homePageLogo" src="/code-sync.png" alt="code-sync-logo" />
        <h4 className="mainLabel">Paste Invitation ROOM ID</h4>
        <div className="inputGroup">
          <input type="text" placeholder="ROOM ID" className="inputBox" />
          <input type="text" placeholder="USER NAME" className="inputBox" />
          <button className="btn joinBtn">Join</button>
          <span className="createInfo">
            If you don&apos;t have an invite create &nbsp;
            <a href="/code-sync.png" className="createNewBtn">
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>Built with 💛  by {'  '} <a href="https://github.com/DeekshaDewangan">Deeksha Dewangan</a></h4>
      </footer>
    </div>
  );
};

export default Home;
