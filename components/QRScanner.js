import { useState } from 'react';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function QRScanner() {
    const [hasPermission, requestPermission] = useCameraPermissions();
    const [scanned, setScanned] = useState(false);

    if (!hasPermission) {
        return <p>No permission to access camera.</p>
    }

    if (!hasPermission.granted) {
        return (
            <button onClick={requestPermission}>Request Camera Permission</button>
        );
    }

    return (
        <div>
            <CameraView
                facing="back"
                style={{ width: '100%', height: 600 }}
                barcodeScannerSettings={{
                    barcodeTypes: ['qr'],
                }}
                onBarcodeScanned={
                    scanned
                        ? undefined
                        : ({ data }) => {
                            setScanned(true);
                            alert(`Scanned: ${data}`);
                        }
                }
            />

            {scanned && (
                <button onClick={() => setScanned(false)}>
                    Scan Again
                </button>
            )}
        </div>
        );
    }