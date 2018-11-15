import { Component, h } from "preact";

import ListItem from "./list-item";

class List extends Component {
  state = {
    items: [],
    stories: []
  };
  componentDidMount() {
    this.loadInitialItems();
  }
  loadInitialItems = () => {
    let allItems = [];
    fetch(`https://hacker-news.firebaseio.com/v0/topstories.json`)
      .then(r => r.json())
      .then(items => {
        allItems = items;
        let itemsSlice = items.slice(
          this.state.stories.length,
          this.state.stories.length + 20
        );
        return Promise.all(
          itemsSlice.map(item =>
            fetch(
              `https://hacker-news.firebaseio.com/v0/item/${item}.json`
            ).then(r => r.json())
          )
        );
      })
      .then(stories => {
        this.setState({ items: allItems, stories });
      });
  };
  loaderMore = () => {
    let items = this.state.items;
    let stories = this.state.stories.slice();
    Promise.all(
      items
        .slice(stories.length, stories.length + 20)
        .map(item =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json`).then(
            r => r.json()
          )
        )
    ).then(newStories => {
      this.setState({ stories: stories.concat(newStories) });
    });
  };
  render(props, state) {
    console.log(state.stories);
    return (
      <div>
        <header>
          <div class="top">PREACT DIGITAL RAIN HN</div>
          <div class="bottom">
            <button class="load-more" onClick={this.loaderMore}>
              Load More Stories
            </button>
            <span class="meta">
              Loaded: {state.stories.length} / {state.items.length}
            </span>
            <div class="right">
              <a
                href="https://github.com/zouhir/preact-digital-rain-hn"
                target="_blank"
                rel="noopener"
              >
                GitHub Repo
              </a>

              <a
                href="https://twitter.com/_zouhir"
                target="_blank"
                rel="noopener"
              >
                Twitter: @_zouhir
              </a>
            </div>
          </div>
        </header>
        <ul class="list">
          {state.stories.map(item => (
            <ListItem
              class="list-item"
              score={item.score}
              title={item.title}
              url={item.url}
              time={item.time}
              type={item.type}
              by={item.by}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
