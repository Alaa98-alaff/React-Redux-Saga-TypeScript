import "./Tags.scss";
import Checkbox from "@mui/material/Checkbox";
import { connect } from "react-redux";
import { useEffect, useState, useRef } from "react";

type Props = {
  items: Array<object>;
};

const Tags: React.FC<Props> = ({ items }) => {
  const [duplicatedTags, setDuplicatedTags] = useState([]);
  const [nonDuplicatedTags, setNonDuplicatedTags] = useState({});

  useEffect(() => handleAllTags(), [items]);

  useEffect(() => handleNoneDuplicatedTags(), [duplicatedTags]);

  const handleAllTags = () => {
    let allTags: any = [];

    items?.map((item: any) => {
      const tagsTypes = item.tags.map((tag: any) => tag);
      allTags.push(...tagsTypes);
    });
    setDuplicatedTags(allTags);
  };

  const handleNoneDuplicatedTags = () => {
    const tagsObj = duplicatedTags?.reduce(
      (acc: any, value: any) => ({
        ...acc,
        [value]: (acc[value] || 0) + 1,
      }),
      {}
    );

    setNonDuplicatedTags(tagsObj);
  };

  const tagType = () => {
    const tags = Object.entries(nonDuplicatedTags).map(
      (tag: any, index: number) => {
        return (
          <div className="tags-types__type" key={index}>
            <Checkbox
              className="checkbox"
              sx={{ "& .MuiSvgIcon-root": { fontSize: "3.1rem" } }}
              // checked={}
              // onChange={}
              inputProps={{ "aria-label": "controlled" }}
            />
            <div className="type-title">
              {tag[0]} ({tag[1]})
            </div>
          </div>
        );
      }
    );

    return tags;
  };

  return (
    <div className="main-tags">
      <p className="main-tags__title">Tags</p>
      <div className="tags-container">
        <div className="tags-container__brand-search-container">
          <input
            placeholder="Search tag"
            className="tags-input"
            type="text"
            name="fname"
            // value="test"
          />
        </div>
        <div className="tags-types">
          <div className="tags-types__type">
            <Checkbox
              className="checkbox"
              sx={{ "& .MuiSvgIcon-root": { fontSize: "3.1rem" } }}
              // checked={}
              // onChange={}
              inputProps={{ "aria-label": "controlled" }}
            />
            <div className="type-title">All</div>
          </div>
          {tagType()}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    items: state.itemsReducer.items,
  };
};

export default connect(mapStateToProps)(Tags);
