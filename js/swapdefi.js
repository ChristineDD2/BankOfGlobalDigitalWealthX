function openWalletConnect() {
    const newWindow = window.open('walletconnect.js', 'WalletConnect', 'width=800,height=600');
    if (window.focus) {
        newWindow.focus();
    }
}
