import React, { Component } from "react";
import axios from "axios";
import Layout from "./hoc/Layout/Layout";
import Blog from "./pages/Blog";

class App extends Component {
  state = {
		posts: [],
	};

  async componentDidMount() {
    const posts = await axios.get(`http://localhost:3001/posts`)
		this.setState({ posts: posts.data });
  }

  render() {
    return (
      <Layout>
        { this.state.posts.length ? <Blog posts={this.state.posts}></Blog> : null}
      </Layout>
    );
  }
}

export default App;
