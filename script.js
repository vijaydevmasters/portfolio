function openProject(projectName) {
    localStorage.setItem("selectedProject", projectName);
    window.location.href = "project.html";
}

document.addEventListener("DOMContentLoaded", function () {
    const projectData = {
        "T5_Navigation": {
            title: "Adaptive Text-to-Command Translation",
            description: "Fine-tuned a T5-Small transformer for translating natural language to structured navigation plans.",
            image: "t5_navigation.jpg",
            github: "https://github.com/suhasnagaraj99/NLP"
        },
        "Lidar_Alignment": {
            title: "Multimodal Alignment for LiDAR and Image Data",
            description: "Developed a LiDAR-RGB alignment model using Q-Former on the KITTI dataset.",
            image: "lidar_alignment.png",
            github: "https://github.com/vijaydevmasters/Q-former"
        },
        "Mario_AI": {
            title: "AI Learns to Play MARIO",
            description: "Deep-Q Learning with SWIN Transformer trained an AI Mario agent.",
            image: "mario_ai.jpg",
            github: "https://github.com/vijaydevmasters/MARIO_DDQN_SWIN"
        },
        "Navigation_YOLO": {
            title: "Autonomous Navigation using YOLOv5",
            description: "Implemented homography, optical flow, and YOLOv5 for adaptive navigation.",
            image: "yolo_navigation.jpg",
            github: "https://github.com/vijaydevmasters/autonomous_navigation_perception"
        },
        "Airplane_Forecasting": {
            title: "RNN and LSTM for Passenger Forecasting",
            description: "Built RNN and LSTM models for accurate airline passenger demand forecasting.",
            image: "airplane_forecast.jpg",
            github: "https://github.com/vijaydevmasters/RNN_LSTM_Airline_passanger/tree/main"
        }
    };

    const selectedProject = localStorage.getItem("selectedProject");
    if (selectedProject && projectData[selectedProject]) {
        document.getElementById("project-title").innerText = projectData[selectedProject].title;
        document.getElementById("project-image").src = projectData[selectedProject].image;
        document.getElementById("project-description").innerText = projectData[selectedProject].description;
        document.getElementById("github-link").href = projectData[selectedProject].github;
    }
});
