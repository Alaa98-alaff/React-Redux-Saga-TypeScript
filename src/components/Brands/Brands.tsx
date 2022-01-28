import "./Brands.scss";
import Checkbox from "@mui/material/Checkbox";
import { connect } from "react-redux";

type Props = {
  companies: Array<object>;
  items: Array<object>;
};

const Brands: React.FC<Props> = ({ companies, items }) => {
  const brandType = () => {
    if (companies && items) {
      const brands = companies.map((company: any) => {
        const companiesNumber = items?.filter(
          (item: any) => item.manufacturer === company.slug
        );

        return (
          <div className="brands-types__type" key={company.account}>
            <Checkbox
              className="checkbox"
              sx={{ "& .MuiSvgIcon-root": { fontSize: "3.1rem" } }}
              // checked={}
              // onChange={}
              inputProps={{ "aria-label": "controlled" }}
            />
            <div className="type-title">
              {company.name} ({companiesNumber.length})
            </div>
          </div>
        );
      });
      return brands;
    }
  };

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
              sx={{ "& .MuiSvgIcon-root": { fontSize: "3.1rem" } }}
              // checked={}
              // onChange={}
              inputProps={{ "aria-label": "controlled" }}
            />
            <div className="type-title">All</div>
          </div>
          {brandType()}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    companies: state.companiesReducer.companies,
    items: state.itemsReducer.items,
  };
};

export default connect(mapStateToProps)(Brands);
