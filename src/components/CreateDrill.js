import React, { Component } from "react";
import { Stage, Layer, Circle, Rect, RegularPolygon } from "react-konva";
import Konva from "konva";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    drills: state.drills,
  };
};

class CreateDrill extends Component {
  state = {
    x: 0,
    y: 0,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://soccster-api.herokuapp.com/drills", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: this.state.title,
        description: this.state.description,
        category: this.state.category,
        drawing: this.state.drawing,
      }),
    });
    window.location.reload(true);
    window.location.href = "/drills";
  };

  myTitleHandler = (event) => {
    this.setState({ title: event.target.value });
  };

  myDescriptionHandler = (event) => {
    this.setState({ description: event.target.value });
  };

  myCategoryHandler = (event) => {
    this.setState({ category: event.target.value });
  };

  render() {
    return (
      <div className="container-fluid" style={{backgroundColor:"#1e1d24", padding:"50px"}}>
        <h5>Create a soccer drill by dragging and dropping elements from the left onto the field! Dont forget to fill out its Title, Category, and Description.</h5>
        <p>NOTE: drills are searchable based on their category so try using a category like attacking or defending and searching for drills that fit the category after submission</p>
        <div class="row">
        <Stage ref="bigStage" id="bigStage" width={1000} height={400} >
          <Layer ref="bigLayer">
            <Rect
              x={150}
              y={0}
              width={1000}
              height={400}
              fill="lightgreen"
            />

            <Circle x={100} y={100} radius={15} fill="blue" />

            <Circle x={100} y={150} radius={15} fill="green" />

            <Rect
              x={90}
              y={200}
              width={50}
              height={20}
              fill="white"
              stroke="green"
            />

            <RegularPolygon x={95} y={250} sides={3} radius={8} fill="orange" />

            <Circle x={95} y={300} radius={6} fill="white" stroke="black" />

            <Circle x={100} y={50} radius={15} fill="red" />

            <Circle
              name="draggableRedCircle"
              x={100}
              y={50}
              radius={15}
              fill="red"
              draggable
              onDragEnd={() => {
                let layer = this.refs.bigLayer;
                let stage = this.refs.bigStage;
                let circle = stage.findOne("." + "draggableRedCircle");
                circle.position({ x: 100, y: 50 });
                let lastPosition = circle._lastPos;
                let json = stage.toJSON();
                this.setState({
                  drawing: json,
                  x: lastPosition.x,
                  y: lastPosition.y,
                });
                console.log(this.state);

                let newCircle = new Konva.Circle({
                  x: this.state.x,
                  y: this.state.y,
                  radius: 15,
                  fill: "red",
                  draggable: true,
                });
                // add the shape to the layer
                this.refs.bigLayer.add(newCircle);
                // add the layer to the stage
                this.refs.bigStage.add(layer);
              }}
            />

            <Circle
              name="draggableBlueCircle"
              x={100}
              y={100}
              radius={15}
              fill="blue"
              draggable
              onDragEnd={() => {
                let layer = this.refs.bigLayer;
                let stage = this.refs.bigStage;

                let circle = stage.findOne("." + "draggableBlueCircle");
                circle.position({ x: 100, y: 100 });
                this.refs.bigStage.draw();
                let lastPosition = circle._lastPos;
                let json = stage.toJSON();
                this.setState({
                  drawing: json,
                  x: lastPosition.x,
                  y: lastPosition.y,
                });
                console.log(this.state);

                let newCircle = new Konva.Circle({
                  x: this.state.x,
                  y: this.state.y,
                  radius: 15,
                  fill: "blue",
                  draggable: true,
                });

                // add the shape to the layer
                this.refs.bigLayer.add(newCircle);

                // add the layer to the stage
                this.refs.bigStage.add(layer);
              }}
            />
            <Circle
              x={100}
              y={150}
              radius={15}
              fill="green"
              draggable
              name="draggableGreenCircle"
              onDragEnd={() => {
                let layer = this.refs.bigLayer;
                let stage = this.refs.bigStage;

                let circle = stage.findOne("." + "draggableGreenCircle");
                circle.position({ x: 100, y: 150 });
                this.refs.bigStage.draw();
                let lastPosition = circle._lastPos;
                let json = stage.toJSON();
                this.setState({
                  drawing: json,
                  x: lastPosition.x,
                  y: lastPosition.y,
                });
                console.log(this.state);

                let newCircle = new Konva.Circle({
                  x: this.state.x,
                  y: this.state.y,
                  radius: 15,
                  fill: "green",
                  draggable: true,
                });

                // add the shape to the layer
                this.refs.bigLayer.add(newCircle);

                // add the layer to the stage
                this.refs.bigStage.add(layer);
              }}
            />

            <Rect
              x={90}
              y={200}
              width={50}
              height={20}
              fill="white"
              stroke="green"
              draggable
              name="draggableRect"
              onDragEnd={() => {
                let layer = this.refs.bigLayer;
                let stage = this.refs.bigStage;

                let circle = stage.findOne("." + "draggableRect");
                circle.position({ x: 90, y: 200 });
                this.refs.bigStage.draw();
                let lastPosition = circle._lastPos;
                let json = stage.toJSON();
                this.setState({
                  drawing: json,
                  x: lastPosition.x,
                  y: lastPosition.y,
                });
                console.log(this.state);

                let newCircle = new Konva.Rect({
                  x: this.state.x,
                  y: this.state.y,
                  width: 50,
                  height: 20,
                  stroke: "green",
                  fill: "white",
                  draggable: true,
                });

                // add the shape to the layer
                this.refs.bigLayer.add(newCircle);

                // add the layer to the stage
                this.refs.bigStage.add(layer);
              }}
            />

            <RegularPolygon
              x={95}
              y={250}
              sides={3}
              radius={8}
              fill="orange"
              draggable
              name="draggableTriangle"
              onDragEnd={() => {
                let layer = this.refs.bigLayer;
                let stage = this.refs.bigStage;

                let circle = stage.findOne("." + "draggableTriangle");
                circle.position({ x: 95, y: 250 });
                this.refs.bigStage.draw();
                let lastPosition = circle._lastPos;
                let json = stage.toJSON();
                this.setState({
                  drawing: json,
                  x: lastPosition.x,
                  y: lastPosition.y,
                });
                console.log(this.state);

                let newCircle = new Konva.RegularPolygon({
                  x: this.state.x,
                  y: this.state.y,
                  sides: 3,
                  radius: 8,
                  fill: "orange",
                  draggable: true,
                });

                // add the shape to the layer
                this.refs.bigLayer.add(newCircle);

                // add the layer to the stage
                this.refs.bigStage.add(layer);
              }}
            />
            <Circle
              x={95}
              y={300}
              radius={6}
              fill="white"
              stroke="black"
              draggable
              name="draggableBall"
              onDragEnd={() => {
                let layer = this.refs.bigLayer;
                let stage = this.refs.bigStage;

                let circle = stage.findOne("." + "draggableBall");
                circle.position({ x: 95, y: 300 });
                this.refs.bigStage.draw();
                let lastPosition = circle._lastPos;
                let json = stage.toJSON();
                this.setState({
                  drawing: json,
                  x: lastPosition.x,
                  y: lastPosition.y,
                });
                console.log(this.state);

                let newCircle = new Konva.Circle({
                  x: this.state.x,
                  y: this.state.y,
                  radius: 6,
                  fill: "white",
                  stroke: "black",
                  draggable: true,
                });

                // add the shape to the layer
                this.refs.bigLayer.add(newCircle);

                // add the layer to the stage
                this.refs.bigStage.add(layer);
              }}
            />
          </Layer>
        </Stage>
        </div>
        
        <div className="row g-2" style={{paddingTop: "15px"}}>
          <form style={{ margin: "auto", width: "50%", padding: "10px" }}>
            <input
              placeholder="Title"
              type="text"
              onChange={this.myTitleHandler}
            />
            <input
              placeholder="Category"
              type="text"
              onChange={this.myCategoryHandler}
            />
            <input
              placeholder="Description"
              type="text-field"
              onChange={this.myDescriptionHandler}
            />
            <button onClick={this.handleSubmit}>Submit Drill</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(CreateDrill);
