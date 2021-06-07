import './App.css';
import { Component } from 'react';
class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      selection: null,
    }
    this.selectBlog = this.selectBlog.bind(this);
  }
  componentDidMount() {
    const blogs = [{
      title: 'a new blog',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam ex suscipit numquam provident in rerum, repellat, corrupti quibusdam magnam iure doloribus nihil cupiditate quas omnis necessitatibus, quam minima expedita voluptas.'
    }, {
      title: 'another awesome post',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime laudantium nemo doloribus dolore omnis adipisci reprehenderit labore delectus, recusandae, voluptatibus amet nesciunt, ut? Quo, dolores sunt officia, cupiditate debitis amet.'
    }];
    // this.setState({ blogs: blogs });
    this.setState({ blogs });
  }
  selectBlog(event) {
    console.dir(event.target)
    const index = Number(event.currentTarget.dataset.index);
    console.log(index);
    this.setState({ selection: this.state.blogs[index] });
  }
  render() {
    const blogs = this.state.blogs.map((blog, index) => (
      <li key={index} onClick={this.selectBlog} data-index={index}>
        <h2>{blog.title}</h2>
      </li>
    ));
    return(
        <>
          <nav>
            Blog Reading App
          </nav>
          <ul>{blogs}</ul>
          {
            this.state.selection &&
            <aside>
              <h2>{this.state.selection?.title}</h2>
              <p>{this.state.selection?.body}</p>
              <button onClick={() => this.setState({selection: null})}>Close</button>
            </aside>
          }
        </>
    );
  }
}
export default Blog;
