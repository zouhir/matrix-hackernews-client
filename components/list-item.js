import { Component, h } from "preact";
import { POINT_CONVERSION_COMPRESSED } from "constants";

class ListItem extends Component {
  render(props, state) {
    return (
      <li class="list-item">
        <div class="score">{props.score}</div>
        <div class="content">
          <div class="title">
            <a href={props.url} target="_blank" rel="noopener">
              {props.title}
            </a>
          </div>
          <div class="meta">
            <span>Time: {props.time}</span>
            <span>Type: {props.type}</span>
            <span>By: {props.by}</span>
          </div>
        </div>
      </li>
    );
  }
}

export default ListItem;
