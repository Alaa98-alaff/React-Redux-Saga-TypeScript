import "./Brands.scss";
// import Checkbox from "@mui/material/Checkbox";
import Checkbox from "@mui/material/Checkbox";

const Brands: React.FC = () => {
  return (
    <div className="main-brands">
      <p className="main-brands__title">Brands</p>
      <div className="brands-container">
        <div className="brands-container__brand-search-container">
          <input
            placeholder="Search brand"
            className="brands-input"
            type="text"
            name="fname"
            // value="test"
          />
        </div>
        <div className="brands-types">
          <div className="brands-types__type">
            <Checkbox
              className="checkbox"
              sx={{ "& .MuiSvgIcon-root": { fontSize: "2.8rem" } }}
              // checked={}
              // onChange={}
              inputProps={{ "aria-label": "controlled" }}
            />
            <div className="type-title">test</div>
          </div>

          <div className="brands-types__type">
            <Checkbox
              className="checkbox"
              sx={{ "& .MuiSvgIcon-root": { fontSize: "2.8rem" } }}
              // checked={}
              // onChange={}
              inputProps={{ "aria-label": "controlled" }}
            />{" "}
            <div className="type-title">test</div>
          </div>

          <div className="brands-types__type">
            <Checkbox
              className="checkbox"
              sx={{ "& .MuiSvgIcon-root": { fontSize: "2.8rem" } }}
              // checked={}
              // onChange={}
              inputProps={{ "aria-label": "controlled" }}
            />
            <div className="type-title">test</div>
          </div>

          <div className="brands-types__type">
            <Checkbox
              className="checkbox"
              sx={{ "& .MuiSvgIcon-root": { fontSize: "2.8rem" } }}
              // checked={}
              // onChange={}
              inputProps={{ "aria-label": "controlled" }}
            />
            <div className="type-title">test</div>
          </div>

          <div className="brands-types__type">
            <Checkbox
              className="checkbox"
              sx={{ "& .MuiSvgIcon-root": { fontSize: "2.8rem" } }}
              // checked={}
              // onChange={}
              inputProps={{ "aria-label": "controlled" }}
            />
            <div className="type-title">test</div>
          </div>

          <div className="brands-types__type">
            <Checkbox
              className="checkbox"
              sx={{ "& .MuiSvgIcon-root": { fontSize: "2.8rem" } }}
              // checked={}
              // onChange={}
              inputProps={{ "aria-label": "controlled" }}
            />
            <div className="type-title">test</div>
          </div>

          <div className="brands-types__type">
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
    </div>
  );
};

export default Brands;
