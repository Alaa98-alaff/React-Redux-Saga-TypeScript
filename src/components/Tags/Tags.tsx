import "./Tags.scss";
import Checkbox from "@mui/material/Checkbox";

const Tags: React.FC = () => {
  return (
    <>
      <p className="tags-container__title">Tags</p>
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
              sx={{ "& .MuiSvgIcon-root": { fontSize: "2.8rem" } }}
              // checked={}
              // onChange={}
              inputProps={{ "aria-label": "controlled" }}
            />
            <div className="type-title">test</div>
          </div>

          <div className="tags-types__type">
            <Checkbox
              className="checkbox"
              sx={{ "& .MuiSvgIcon-root": { fontSize: "2.8rem" } }}
              // checked={}
              // onChange={}
              inputProps={{ "aria-label": "controlled" }}
            />{" "}
            <div className="type-title">test</div>
          </div>

          <div className="tags-types__type">
            <Checkbox
              className="checkbox"
              sx={{ "& .MuiSvgIcon-root": { fontSize: "2.8rem" } }}
              // checked={}
              // onChange={}
              inputProps={{ "aria-label": "controlled" }}
            />
            <div className="type-title">test</div>
          </div>

          <div className="tags-types__type">
            <Checkbox
              className="checkbox"
              sx={{ "& .MuiSvgIcon-root": { fontSize: "2.8rem" } }}
              // checked={}
              // onChange={}
              inputProps={{ "aria-label": "controlled" }}
            />
            <div className="type-title">test</div>
          </div>

          <div className="tags-types__type">
            <Checkbox
              className="checkbox"
              sx={{ "& .MuiSvgIcon-root": { fontSize: "2.8rem" } }}
              // checked={}
              // onChange={}
              inputProps={{ "aria-label": "controlled" }}
            />
            <div className="type-title">test</div>
          </div>

          <div className="tags-types__type">
            <Checkbox
              className="checkbox"
              sx={{ "& .MuiSvgIcon-root": { fontSize: "2.8rem" } }}
              // checked={}
              // onChange={}
              inputProps={{ "aria-label": "controlled" }}
            />
            <div className="type-title">test</div>
          </div>

          <div className="tags-types__type">
            <Checkbox
              className="checkbox"
              sx={{ "& .MuiSvgIcon-root": { fontSize: "2.8rem" } }}
              // checked={}
              // onChange={}
              inputProps={{ "aria-label": "controlled" }}
            />
            <div className="type-title">test</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tags;
