from pydantic import BaseModel

class ProductDetailsCreate(BaseModel):
    eutName: str
    eutQuantity: str
    manufacturer: str = ""
    modelNo: str = ""
    serialNo: str = ""
    supplyVoltage: str = ""
    operatingFrequency: str = ""
    current: str = ""
    weight: str = ""
    length: str = ""
    width: str = ""
    height: str = ""
    powerPorts: str = ""
    signalLines: str = ""
    softwareName: str = ""
    softwareVersion: str = ""