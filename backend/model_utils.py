import os


# Model file path
MODEL_PATH = os.getenv("MODEL_PATH", "best.pt")

# Try to import YOLO model
try:
    from ultralytics import YOLO
    yolo_available = True
except ImportError:
    print("Warning: Ultralytics YOLO not available. Using fallback detection method.")
    yolo_available = False

# Initialize YOLO model if available
model = None
if yolo_available:
    try:
        # Try to load the model
        if os.path.exists(MODEL_PATH):
            model = YOLO(MODEL_PATH)
            print(f"Successfully loaded YOLOv8 model from {MODEL_PATH}")
        else:
            print(f"Warning: Model file {MODEL_PATH} not found. Using fallback detection method.")
            print(f"Current working directory: {os.getcwd()}")
            print(f"Absolute path to model: {os.path.abspath(MODEL_PATH)}")
            print(f"Files in current directory: {os.listdir('.')}")
            print(f"Files in backend directory (if exists): {os.listdir('./backend') if os.path.exists('./backend') else 'backend dir not found'}")
    except Exception as e:
        print(f"Error loading YOLO model: {str(e)}. Using fallback detection method.")

# Define class names for YOLO model
class_names = {
    0: "Actinic keratoses",
    1: "Basal cell carcinoma",
    2: "Benign keratosis-like I",
    3: "Dermatofibroma",
    4: "Melanocytic nevi",
    5: "Melanoma",
    6: "Vascular lesions",
}

# Disease info for skin conditions
disease_info = {
    "Actinic keratoses": {
        "description": "A precancerous area of thick, scaly, or crusty skin.",
        "treatment": "Cryotherapy, topical chemotherapy, or photodynamic therapy.",
    },
    "Basal cell carcinoma": {
        "description": "A type of skin cancer that begins in the basal cells.",
        "treatment": "Surgical excision, cryotherapy, or topical treatments.",
    },
    "Benign keratosis-like I": {
        "description": "Benign growths that resemble certain types of cancerous skin lesions.",
        "treatment": "No treatment needed unless it becomes irritated or infected.",
    },
    "Dermatofibroma": {
        "description": "A common benign skin tumor consisting of fibroblasts.",
        "treatment": "No treatment unless cosmetic con  cerns or irritation occurs.",
    },
    "Melanocytic nevi": {
        "description": "Common moles formed from pigment-producing cells.",
        "treatment": "Monitor for changes; excision if needed for biopsy or cosmetic purposes.",
    },
    "Melanoma": {
        "description": "A serious type of skin cancer that develops from melanocytes.",
        "treatment": "Surgical removal, chemotherapy, and immunotherapy.",
    },
    "Vascular lesions": {
        "description": "Abnormal growth of blood vessels, commonly appearing as red or purple spots.",
        "treatment": "Laser therapy, sclerotherapy, or cryotherapy.",
    },
    "Unknown": {
        "description": "The condition could not be identified with confidence.",
        "treatment": "Consult a dermatologist for further diagnosis.",
    }
}

