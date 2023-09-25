export const Home = () => {
  const blogImg = "../assets/blogimg.png";
  return (
    <>
      <main id="view-home">
        <section id="left-home">
          <div className="left test1">
            <div className="image-container">
              <p className="post-title">dummy text</p>
              <img className="post-image" src={blogImg}></img>
            </div>
          </div>
          <div className="left test2">
            <div className="image-container">
              <p className="post-title">dummy text</p>
              <img className="post-image" src={blogImg}></img>
            </div>
          </div>
        </section>
        <section id="right-home">
          <div className="right test1">
            <div className="image-container">
              <p className="post-title">dummy text</p>
              <img className="post-image" src={blogImg}></img>
            </div>
          </div>
          <div className="right test2">
            <div className="image-container">
              <p className="post-title">dummy text</p>
              <img className="post-image" src={blogImg}></img>
            </div>
          </div>
          <div className="right test3">
            <div className="image-container">
              <p className="post-title">dummy text</p>
              <img className="post-image" src={blogImg}></img>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
