import React, { useReducer, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const initialState = {
  currentImageIndex: 0,
};

const imageReducer = (state, action) => {
  switch (action.type) {
    case "NEXT_IMAGE":
      return {
        currentImageIndex: state.currentImageIndex + 1,
      };
    case "PREVIOUS_IMAGE":
      return {
        currentImageIndex: state.currentImageIndex - 1,
      };
    default:
      return state;
  }
};

const images = [
  "https://scontent.fixc4-2.fna.fbcdn.net/v/t39.30808-6/393823228_668266505435016_1755422933781123325_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7KeSNjnFy4AQ7kNvgFJQTPq&_nc_ht=scontent.fixc4-2.fna&oh=00_AYBl0r1Vtu3zuL3ZSJvfXwzdDtH94XLnZTFEQpcM7niXbA&oe=66C047CF",
  "https://scontent.fixc4-3.fna.fbcdn.net/v/t39.30808-6/393589858_663752179219782_5325694991398824267_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=H__ffEeGSm4Q7kNvgE6ewMI&_nc_ht=scontent.fixc4-3.fna&oh=00_AYDhwY11KpkM_75t78r75oXzET3MrxFllCH0Sqv0Zlmjdg&oe=66C05787",
  "https://scontent.fixc4-3.fna.fbcdn.net/v/t39.30808-6/326010828_875470176836879_7361392896240232197_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Dp71T77W-KcQ7kNvgG2ydam&_nc_ht=scontent.fixc4-3.fna&oh=00_AYB4IpO7SpLyGo0mi1xRCmhuzQiWBGp9Yt9-gEzqP1srMw&oe=66C03DC3",
  "https://i.pinimg.com/564x/83/00/74/8300746cc4f016c52ec585f9ead677fe.jpg",
  "https://assets.teenvogue.com/photos/5ae0d8c47ec0444ce4daa37e/16:9/w_1600,c_limit/hopemikaelson-lede.jpg",
  "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da847f8eb73c1ae53af7bfd3389d",
  "https://img.wattpad.com/cover/251661333-288-k281930.jpg",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ad7572ba-5b00-4602-bb73-057ed0a6a521/df6y08q-592c2c48-01fa-481c-81c6-4cf0e366b834.jpg/v1/fill/w_894,h_894,q_70,strp/legacies___hope_mikaelson_by_katitoomes_df6y08q-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2FkNzU3MmJhLTViMDAtNDYwMi1iYjczLTA1N2VkMGE2YTUyMVwvZGY2eTA4cS01OTJjMmM0OC0wMWZhLTQ4MWMtODFjNi00Y2YwZTM2NmI4MzQuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ED9SHjYsixSUyBtfHHvdK9zGZIObC4Sn-eyHzWSje0k",
  "https://c.tenor.com/flkkkhUPqKMAAAAd/tenor.gif",
  "https://scontent.fixc4-2.fna.fbcdn.net/v/t39.30808-6/412338136_930324238459359_8252788703199841447_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=gGOwsrlwRF8Q7kNvgGhi_a9&_nc_ht=scontent.fixc4-2.fna&oh=00_AYBXvrb_B35GgAPGF0ZTQ6hRWJUHIOdJSSv3nldvDKqsaQ&oe=66C03ACD",
  "https://www.superherodb.com/pictures2/portraits/10/050/23042.jpg?v=1682004459",
  "https://scontent.fixc4-2.fna.fbcdn.net/v/t1.6435-9/169369429_770267330545936_7929112972537250599_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=zM3ivHJBRBUQ7kNvgGwgMDt&_nc_ht=scontent.fixc4-2.fna&oh=00_AYC3Ov4f2x4NdxbL5SVbevZlh4-5hNW6k0xZWkIAzT4b8g&oe=66E1ED05",
  "https://e1.pxfuel.com/desktop-wallpaper/619/413/desktop-wallpaper-hope-mikaelson-iphone-danielle-rose-russell.jpg",
  "https://e1.pxfuel.com/desktop-wallpaper/413/942/desktop-wallpaper-hope-mikaelson-icon-in-2020.jpg",
  "https://scontent.fixc4-3.fna.fbcdn.net/v/t39.30808-6/327732227_5814583118591418_2853635118153131524_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_543WCGM7oIQ7kNvgHSMGS1&_nc_ht=scontent.fixc4-3.fna&oh=00_AYA5yifN-yZMIaAzEaOFQfidvvpaV9X4EWnuIMC-_furlw&oe=66C03B65",
  "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/03/Legacies-Hope-has-become-worse-than-Klaus.jpg?q=50&fit=crop&w=1100&h=618&dpr=1.5",
  "https://www.lizdress.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/image/14346a25/hope-mikaelson-burgundy-red-dress-in-legacies.jpg",
  "https://www.usaleatherfactory.com/wp-content/uploads/2023/11/hope-mikaelson-legacies-season-4-quilted-leather-jacket-640x766.jpg.webp",
];

export default function Gallery() {
  const [copy, setCopy] = useState("");
  const codeString = `import React, { useReducer } from "react";

const initialState = {
  currentImageIndex: 0,
};

const imageReducer = (state, action) => {
  switch (action.type) {
    case "NEXT_IMAGE":
      return {
        currentImageIndex: state.currentImageIndex + 1,
      };
    case "PREVIOUS_IMAGE":
      return {
        currentImageIndex: state.currentImageIndex - 1,
      };
    default:
      return state;
  }
};

const images = [
  "https://scontent.fixc4-2.fna.fbcdn.net/v/t39.30808-6/393823228_668266505435016_1755422933781123325_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7KeSNjnFy4AQ7kNvgFJQTPq&_nc_ht=scontent.fixc4-2.fna&oh=00_AYBl0r1Vtu3zuL3ZSJvfXwzdDtH94XLnZTFEQpcM7niXbA&oe=66C047CF",
  "https://scontent.fixc4-3.fna.fbcdn.net/v/t39.30808-6/393589858_663752179219782_5325694991398824267_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=H__ffEeGSm4Q7kNvgE6ewMI&_nc_ht=scontent.fixc4-3.fna&oh=00_AYDhwY11KpkM_75t78r75oXzET3MrxFllCH0Sqv0Zlmjdg&oe=66C05787",
];

export default function Gallery() {
  const [state, dispatch] = useReducer(imageReducer, initialState);
  const currentImage = images[state.currentImageIndex];

  return (
    <>
      <h2>Image Gallery using useReducer</h2>
      <div>
        <img src={currentImage} alt="Hope" />
      </div>
      <div>
        <button onClick={() => dispatch({ type: "PREVIOUS_IMAGE" })}>
          Prev
        </button>
        <button onClick={() => dispatch({ type: "NEXT_IMAGE" })}>Next</button>
      </div>
    </>
  );
}
`;
  const [state, dispatch] = useReducer(imageReducer, initialState);
  const currentImage = images[state.currentImageIndex];

  return (
    <>
      <h2>Image Gallery using useReducer</h2>
      <div className="d-flex" style={{ justifyContent: "space-between" }}>
        <button
          className="mx-4"
          disabled={state.currentImageIndex === 0}
          style={{
            fontSize: "25px",
            color: "white",
            backgroundColor: state.currentImageIndex === 0 ? "#423434" : "",
          }}
          onClick={() => dispatch({ type: "PREVIOUS_IMAGE" })}
        >
          &lt;
        </button>
        <img className="img-fluid mb-3 mt-3" src={currentImage} alt="Hope" />
        <button
          className="mx-4"
          style={{
            fontSize: "25px",
            color: "white",
            backgroundColor:
              state.currentImageIndex === images.length - 1 ? "#423434" : "",
          }}
          onClick={() => dispatch({ type: "NEXT_IMAGE" })}
          disabled={state.currentImageIndex === images.length - 1}
        >
          &gt;
        </button>
      </div>

      <div
        className="mt-4 container"
        style={{
          display: "flex",
          textAlign: "start",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            minWidth: "40%",
            backgroundColor: "#29344A",
            borderRadius: "10px",
          }}
        >
          <div className="d-flex justify-content-between px-4 text-white text-xs align-items-center">
            <p className="text-sm mt-3 ">Example Code</p>
            {copy ? (
              <button
                style={{ backgroundColor: "#29344A", outline: "none" }}
                className="mt-2 d-inline-flex align-items-center gap-1 mb-2"
              >
                <span className="text-base mt-1">
                  <ion-icon name="clipboard"></ion-icon>
                </span>
                Copied!
              </button>
            ) : (
              <button
                className="mt-2 d-inline-flex align-items-center gap-1 mb-2"
                onClick={() => {
                  navigator.clipboard.writeText(codeString);
                  setCopy(true);
                  setTimeout(() => {
                    setCopy(false);
                  }, 2000);
                }}
              >
                <span className="text-base mt-1">
                  <ion-icon name="clipboard"></ion-icon>
                </span>
                Copy Code
              </button>
            )}
          </div>
          <SyntaxHighlighter
            language="jsx"
            style={atomOneDark}
            customStyle={{
              padding: "25px",
              height: "100",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
              marginBottom: 0,
            }}
            wrapLongLines={true}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
}
