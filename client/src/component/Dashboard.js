import React from "react";
import Title from "./atoms/Title";
import Container from "./atoms/Container";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <Container
      content={
        <div>
          <Title title="Dashboard" />
          <Link to="/create-poll" className="btn btn-info btn-block mt-4">
            Create a poll
          </Link>
        </div>
      }
    />
  );
};

export default Dashboard;
