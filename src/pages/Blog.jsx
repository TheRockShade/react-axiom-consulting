import React, { Component } from "react";
import "./Blog.scss";
class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Our Blog: Industry Secrets, Expert Know-how and More",
      subtitle: "Knowledge is power",
      tags: ["politic", "news", "criminal", "other"],
      newPosts: this.props.posts,
    };
  }

  getTagsPosts = (e) => {
    const newPosts = this.props.posts.filter((post) => {
      return post.tags.includes(e.target.value);
    });

    this.setState({
      newPosts,
    });
  };

  resetPosts = () => {
    this.setState({
      newPosts: this.props.posts,
    });

    document.querySelectorAll(".checkboxes__input").forEach((inp) => {
      if (inp.checked) inp.checked = false;
    });
  };

  render() {
    return (
      <section className="blog">
        <div className="grid-block blog__inner">
          <div className="blog__top">
            <ul className="blog__checkboxes checkboxes">
              {this.state.tags.map((tag) => {
                return (
                  <li className="checkboxes__item" key={tag}>
                    <input
                      className="checkboxes__input"
                      id={"tags-" + tag}
                      type="radio"
                      name="tags"
                      value={tag}
                      onClick={this.getTagsPosts}
                    ></input>
                    <label
                      className="checkboxes__label"
                      htmlFor={"tags-" + tag}
                    >
                      <span className="checkboxes__text">{tag}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
            <button className="blog__button btn" onClick={this.resetPosts}>
              Reset
            </button>
          </div>
          <ul className="blog__list blog-list">
            {this.state.newPosts.map((post, index) => {
              return (
                <li className="blog-list__item" key={post.id}>
                  <article className="blog-list__article">
                    <a className="blog-list__link" href="/">
                      <span className="blog-list__pag">
                        {index + 1 > 9 ? index + 1 : "0" + (index + 1)}
                      </span>
                      <header className="blog-list__header">
                        <h4 className="blog-list__title font-quote">
                          {post.header}
                        </h4>
                      </header>
                      <div className="blog-list__note">{post.description}</div>
                      <div className="blog-list__tags">
                        <h5 className="blog-list__tags-title">Tags: </h5>
                        {post.tags.map((tag) => (
                          <span className="blog-list__tags-item" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <time className="blog-list__date" dateTime="">
                        Posted on {post.date}
                      </time>
                    </a>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
}

export default Blog;
