
# Testing Facility Selector module

## Setup

1. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

2. Start the server:
   ```
   python main.py
   ```

## API

- `POST /api/module1/equipment` - Create equipment
- `GET /api/module1/equipment` - List all equipment
- `GET /api/module1/equipment/{id}` - Get equipment by ID

## Contributing

- Use feature branches for new features.
- Write tests for new endpoints.
- Keep API and frontend field names consistent.