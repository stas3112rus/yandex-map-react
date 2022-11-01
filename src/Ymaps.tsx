import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";

interface YmapsProps {
  center?: number[];
  zoom?: number;
  className?: string;
  width?: string | number;
  height?: string | number;
  placeMarks?: number[][];
}

const Ymaps = (props: YmapsProps): JSX.Element => {
  return (
    <YMaps
      query={{ apikey: "2aec7e6a-85b9-47a0-bb5d-31de6f6b5c69", lang: "ru_RU" }}
    >
      <Map
        onClick={(e: { get: (arg0: string) => number[]; }) => console.log(e.get("coords"))}
        defaultState={{
          center: props.center ?? [45.279413, 34.193864],
          zoom: props.zoom ?? 8,
        }}
        width={props.width ?? 1024}
        height={props.height ?? 600}
        className={props.className}
      >
        <Placemark geometry={props.placeMarks?.map((placeMark) => placeMark)} />
        <ZoomControl />
      </Map>
    </YMaps>
  );
};

export default Ymaps;
