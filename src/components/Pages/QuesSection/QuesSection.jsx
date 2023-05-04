import React from "react";
import Lottie from "lottie-react";
import chef from "../../../assets/19705-chef.json";
import { Accordion } from "react-bootstrap";

const QuesSection = () => {
  return (
    <div className="d-flex mt-5 container directors">
      <div>
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>How is the Turkey Food? </Accordion.Header>
            <Accordion.Body>
              Turkish cuisine is one of the world’s top cuisines, joining the
              ranks of French, Chinese, Italian, and the like. Like the
              country’s cultural mosaic, the food of Turkey is very colorful and
              contains countless different influences and tastes. The cuisine of
              Turkey has continued to evolve over centuries, deriving influence
              from its rich history of lands that hosted first the Byzantine,
              and then the Ottoman Empires.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              What is the Breakfasts in Turkish cuisine ?
            </Accordion.Header>
            <Accordion.Body>
              Breakfast is a significant event for many cultures around the
              world but in Turkey, it’s more like an elaborate ceremony than
              just another meal of the day. Weekday breakfast in Turkey is a
              light, quick, yet filling meal. It has all the energy you need to
              get through your day without getting too hungry. The Turkish
              breakfasts are very diverse and offer many vegetarian/vegan
              options for those looking for something other than animal protein
              while also providing good suggestions if someone prefers meat in
              their diet.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Who is the best Chef in Turkey ?{" "}
            </Accordion.Header>
            <Accordion.Body>
              Chef Ali Güngörmüş was born in Tunceli in 1976. His parents and
              family were against him being a cook. However, he trained as a
              cook. He was the first chef to bag a Michelin star. He received
              the Michelin star in 2006 for his restaurant, Le Canard Nouveau in
              Hamburg.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Who is the smiling Turkish chef?
            </Accordion.Header>
            <Accordion.Body>
              CZN Burak's fans react Fans of the legendary chef are heartbroken
              to see him in tears and they are praying for all their brethren
              stuck in Syria and Turkey. Since the man is known for his iconic
              smile, it is shocking for viewers to see him weep
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <div>
        <Lottie
          animationData={chef}
          loop={true}
          style={{ height: "450px", width: "500px" }}
        />
      </div>
    </div>
  );
};

export default QuesSection;
