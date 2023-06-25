import React, { useState } from "react";
import { FormControl, FormControlLabel, Pagination } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Slider from "@mui/material/Slider";
import Loader from "../layouts/Loader";
import MinCategory from "../layouts/MinCategory";
import Product from "./allProduct";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { Star } from "@mui/icons-material";
import { categories } from "../../utils/constans";
import MetaData from "../layouts/MetaData";
import { getRandomProducts } from "../../utils/functions";

function Products() {
  const [price, setPrice] = useState([0, 200000]);

  return (
    <>
      <MetaData title="Products" />
      <MinCategory />

      <main className="w-full mt-14 sm:mt-0">
        {/* row */}
        <div className="flex gap-3 mt-2 sm:mt-2 sm:mx-3 m-auto mb-7">
          <div className="hidden sm:flex flex-col w-1/5 px-1">
            <div className="flex flex-col bg-white rounded-sm shadow">
              <div className="flex items-center justify-between gap-5 px-4 py-2 border-b">
                <p className="text-lg font-medium">Filters</p>
                <span className="uppercase text-primary-blue text-xs cursor-pointer font-medium">
                  Clear All
                </span>
              </div>

              <div className="flex flex-col gap-2 py-3 text-sm overflow-hidden">
                <div className="flex flex-col gap-2 border-b px-4">
                  <span className="font-medium text-xs">PRICE</span>

                  <Slider
                    value={price}
                    valueLabelDisplay="auto"
                    min={0}
                    max={200000}
                  />

                  <div className="flex gap-3 items-center justify-between mb-3 min-w-full">
                    <span className="flex-1 border px-4 py-1 rounded-sm text-gray-800 bg-gray-50">
                      $ 1000
                    </span>
                    <span className="font-medium text-gray-400">to</span>
                    <span className="flex-1 border px-4 py-1 rounded-sm text-gray-800 bg-gray-50">
                      $ 4000
                    </span>
                  </div>
                </div>

                <div className="flex flex-col border-b px-4">
                  <div className="flex justify-between cursor-pointer py-2 pb-4 items-center">
                    <p className="font-medium tex-xs uppercase">Ratings</p>
                    <ExpandLess sx={{ fontSize: "20px" }} />
                    {/* <ExpandMore sx={{ fontSize: "20px" }} /> */}
                  </div>

                  <div className="flex flex-col pb-1">
                    <FormControl>
                      <RadioGroup
                        aria-labelledby="ratings-radio-buttons-group"
                        name="ratings-radio-buttons"
                      >
                          <FormControlLabel
                            control={<Radio size="small" />}
                            label={
                              <span className="flex items-center text-sm gap-5">
                                5
                                <Star sx={{ fontSize: "12px", mr: 0.5, color: "yellow" }} />
                                <Star sx={{ fontSize: "12px", mr: 0.5, color: "yellow" }} />
                                <Star sx={{ fontSize: "12px", mr: 0.5, color: "yellow" }} />
                                <Star sx={{ fontSize: "12px", mr: 0.5, color: "yellow" }} />
                                <Star sx={{ fontSize: "12px", mr: 0.5, color: "yellow" }} />
                              </span>
                            }
                          />
                          <FormControlLabel
                            control={<Radio size="small" />}
                            label={
                              <span className="flex items-center text-sm gap-5">
                                4
                                <Star sx={{ fontSize: "12px", mr: 0.5, color: "yellow" }} />
                                <Star sx={{ fontSize: "12px", mr: 0.5, color: "yellow" }} />
                                <Star sx={{ fontSize: "12px", mr: 0.5, color: "yellow" }} />
                                <Star sx={{ fontSize: "12px", mr: 0.5, color: "yellow" }} />
                              </span>
                            }
                          />
                          <FormControlLabel
                            control={<Radio size="small" />}
                            label={
                              <span className="flex items-center text-sm gap-5">
                                3
                                <Star sx={{ fontSize: "12px", mr: 0.5, color: "yellow" }} />
                                <Star sx={{ fontSize: "12px", mr: 0.5, color: "yellow" }} />
                                <Star sx={{ fontSize: "12px", mr: 0.5, color: "yellow" }} />
                              </span>
                            }
                          />
                          <FormControlLabel
                            control={<Radio size="small" />}
                            label={
                              <span className="flex items-center text-sm gap-5">
                                2
                                <Star sx={{ fontSize: "12px", mr: 0.5, color: "yellow" }} />
                                <Star sx={{ fontSize: "12px", mr: 0.5, color: "yellow" }} />
                              </span>
                            }
                          />
                          <FormControlLabel
                            control={<Radio size="small" />}
                            label={
                              <span className="flex items-center text-sm gap-5">
                                1
                                <Star sx={{ fontSize: "12px", mr: 0.5, color: "yellow" }} />
                              </span>
                            }
                          />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            {/* <div className="flex flex-col items-center justify-center gap-3 bg-white shadow-sm rounded-sm p-6 sm:p-16">
              <img
                draggable="false"
                className="w-1/2 h-44 object-contain"
                src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/error-no-search-results_2353c5.png"
                alt="Search Not Found!"
              />
              <h1 className="text-2xl font-medium text-gray-950">
                Sorry, no results found!
              </h1>
              <p className="text-xl text-center text-primary-grey">
                Please check the spelling or try searching for something else
              </p>
            </div> */}

            <div className="flex flex-col gap-2 pb-4 justify-center items-center w-full overflow-hidden bg-white">
              <div className="grid grid-cols-1 sm:grid-cols-4 w-full place-content-start overflow-hidden pb-4 border-b">
                <Product />
              </div>

              <Pagination />
            </div>
          </div>
        </div>
        {/* end row */}
      </main>
    </>
  );
}

export default Products;
