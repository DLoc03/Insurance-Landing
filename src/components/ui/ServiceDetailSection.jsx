import React, { useEffect, useState } from "react";

import future from "@assets/service/service_1/image_1.png";
import dream from "@assets/service/service_2/image_1.png";
import life from "@assets/service/service_3/image_1.png";
import shield from "@assets/service/service_4/image_1.png";
import side from "@assets/service/service_5/image_1.png";
import guardian from "@assets/service/service_6/image_1.png";

import ServiceDetailCard from "../common/ServiceDetailCard";

import { items } from "@/datas/service.json";
import { getServiceByCategories } from "@/utils";

function ServiceDetailSection() {
  if (!items) return null;

  const [services, setServices] = useState([]);

  useEffect(() => {
    if (items) {
      const data = getServiceByCategories(items, ["outstanding", "new"]);
      setServices(data);
    }
  }, [items]);

  return (
    <>
      <ServiceDetailCard
        data={services?.[0]}
        image={dream}
        layout="default"
        advantageHeading={services?.[0]?.advantage?.map(
          (ad, index) => index + 1
        )}
      />
      <ServiceDetailCard
        data={services?.[1]}
        image={future}
        layout="default"
        advantageHeading={services?.[0]?.advantage?.map(
          (ad, index) => index + 1
        )}
      />
      <ServiceDetailCard
        data={services?.[2]}
        image={life}
        layout="right"
        advantageHeading={services?.[0]?.advantage?.map(
          (ad, index) => index + 1
        )}
      />
      <ServiceDetailCard
        data={services?.[3]}
        image={shield}
        layout="default"
        advantageHeading={services?.[0]?.advantage?.map(
          (ad, index) => index + 1
        )}
      />
      <ServiceDetailCard
        data={services?.[3]}
        image={side}
        layout="default"
        advantageHeading={services?.[0]?.advantage?.map(
          (ad, index) => index + 1
        )}
      />
    </>
  );
}

export default ServiceDetailSection;
