async function connectWallet() {
    if (window.ethereum) {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const walletAddress = accounts[0];
            document.getElementById('walletAddress').textContent = walletAddress;
            document.getElementById('walletInfo').style.display = 'block';
        } catch (error) {
            console.error('User rejected the request:', error);
        }
    } else {
        alert('MetaMask not detected. Please install MetaMask to use this feature.');
    }
}

document.getElementById('connectWallet').addEventListener('click', connectWallet);
