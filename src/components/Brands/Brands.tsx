import "./Brands.scss";
import Checkbox from "@mui/material/Checkbox";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import dispatch from "../../redux/dispatch";
import * as actionTypes from "../../redux/actionTypes";

type Props = {
  companies: Array<object>;
  items: Array<object>;
};

const Brands: React.FC<Props> = ({ companies, items }) => {
  const [isChecked, setIsChecked] = useState(Boolean);
  const [selecteCompanies, setSelectedCompanies] = useState(Array as any);
  const [currentBox, setCurretBox] = useState();
  const [companiesObj, setCompaniesObj] = useState(Array as any);
  const [companiesItems, setCompaniesItems] = useState(Array as any);
  const [allIsChecked, setAllIsChecked] = useState(false);

  useEffect(() => {
    handleSelectingCompanies();
  }, [currentBox, isChecked]);

  useEffect(() => {
    getCompaniesObj();
  }, [isChecked, selecteCompanies]);

  useEffect(() => {
    getCompaniesItems();
  }, [companiesObj]);

  const handleChange = (e: any) => {
    setIsChecked(e.target?.checked);
    setCurretBox(e.target?.value);
  };

  const handleSelectingCompanies = () => {
    if (isChecked) {
      return setSelectedCompanies([...selecteCompanies, currentBox]);
    } else if (!isChecked && isChecked !== undefined) {
      setSelectedCompanies(
        selecteCompanies.filter(function (item: any) {
          return item !== currentBox;
        })
      );
    }
  };

  const getCompaniesObj = () => {
    let totalArr: Array<any> = [];
    selecteCompanies?.map((company: any, index: number) => {
      const arr = companies?.filter((item: any) => item.name === company);
      totalArr.push(...arr);
    });

    setCompaniesObj(totalArr);
  };

  const getCompaniesItems = () => {
    let totalArr: Array<any> = [];

    companiesObj?.map((company: any, index: number) => {
      const companyItems = items?.filter(
        (item: any) => item.manufacturer === company.slug
      );

      totalArr.push(...companyItems);
    });

    setCompaniesItems(totalArr);
  };

  const handleChangeAll = (e: any) => {
    setAllIsChecked(e.target?.checked);
  };

  const handleAllBrands = () => {
    if (allIsChecked) {
      dispatch(actionTypes.BRANDS_ITEMS, items);
    } else {
      dispatch(actionTypes.BRANDS_ITEMS, companiesItems);
    }
  };

  useEffect(() => {
    handleAllBrands();
  }, [selecteCompanies, allIsChecked]);

  useEffect(() => {
    if (companiesItems && !allIsChecked)
      dispatch(actionTypes.BRANDS_ITEMS, companiesItems);
  }, [companiesItems]);

  const brandType = () => {
    if (companies && items) {
      const brands = companies.map((company: any, index: number) => {
        const companiesNumber = items?.filter(
          (item: any) => item.manufacturer === company.slug
        );

        return (
          <div className="brands-types__type" key={company.account}>
            <Checkbox
              key={company.account}
              className="checkbox"
              sx={{ "& .MuiSvgIcon-root": { fontSize: "3.1rem" } }}
              value={company.name}
              onChange={handleChange}
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
          />
        </div>
        <div className="brands-types">
          <div className="brands-types__type">
            <Checkbox
              className="checkbox"
              sx={{ "& .MuiSvgIcon-root": { fontSize: "3.1rem" } }}
              onChange={handleChangeAll}
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
