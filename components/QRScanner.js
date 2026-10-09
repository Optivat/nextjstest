import { useState } from 'react';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function QRScanner() {
    const [hasPermission, requestPermission] = useCameraPermissions();
    const [scanned, setScanned] = useState(false);
    const [facing, setFacing] = useState('back');

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
                facing={facing}
                type={facing}
                style={{ width: '100%', height: 600 }}
                barCodeScannerSettings={{
                    barCodeTypes: ['qr'],
                }}
                onBarCodeScanned={
                    scanned
                        ? undefined
                        : ({ nativeEvent: { data } }) => {
                            setScanned(true);
                            alert(`Scanned: ${data}`);
                        }
                }
            />
            <button
                onClick={() => setFacing(facing === 'back' ? 'front' : 'back')
                }
            >
                Flip Camera
            </button>

            {scanned && (
                <button onClick={() => setScanned(false)}>
                    Scan Again
                </button>
            )}
        </div>
        );
    }