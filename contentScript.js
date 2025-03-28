//chrome://extensions/

// Main Overlay idv
const overlay = document.createElement('div');
overlay.id = 'custom-overlay';
Object.assign(overlay.style, {
  position: 'fixed',
  top: '50px',
  left: '50px',
  width: '320px',
  height: '350px',
  zIndex: '9999',
  padding: '10px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'
});

// Header
const header = document.createElement('div');
header.innerText = 'Paper Memes - To The Moon 🚀';
header.style.fontWeight = 'bold';
header.style.marginBottom = '10px';
header.style.cursor = 'move';
overlay.appendChild(header);

// Wallet display
const walletDisplay = document.createElement('div');
walletDisplay.innerText = 'Wallet: Loading...';
walletDisplay.style.marginBottom = '0px';
walletDisplay.style.paddingBottom = '0px';
walletDisplay.style.paddingTop = '4px';
overlay.appendChild(walletDisplay);

// Wallet gain percentage display
const walletGainPercentageDisplay = document.createElement('div');
walletGainPercentageDisplay.innerText = 'Gain: Loading...';
walletGainPercentageDisplay.style.marginBottom = '4px';
walletGainPercentageDisplay.style.paddingBottom = '4px';
walletGainPercentageDisplay.style.paddingTop = '0px';
overlay.appendChild(walletGainPercentageDisplay);

// Set Wallet button
const walletButton = document.createElement('button');
walletButton.innerText = 'Set Wallet';
walletButton.style.padding = '5px 20px';
walletButton.style.marginBottom = '10px';
//walletButton.style.width = '200px';
walletButton.style.position = 'absolute';
walletButton.style.top = '40px';
walletButton.style.right = '20px';
walletButton.style.fontSize = '12px';
overlay.appendChild(walletButton);

// Price display
const priceDisplay = document.createElement('div');
priceDisplay.innerText = 'Current Price: Loading...';
priceDisplay.style.marginBottom = '4px';
overlay.appendChild(priceDisplay);

// Tokens owned display
const tokensOwnedDisplay = document.createElement('div');
tokensOwnedDisplay.innerText = 'Tokens Owned:   0';
tokensOwnedDisplay.style.marginBottom = '0px';
overlay.appendChild(tokensOwnedDisplay);

// Tokens owned value display
const tokensOwnedValueDisplay = document.createElement('div');
tokensOwnedValueDisplay.innerText = 'Tokens Value: $0';
tokensOwnedValueDisplay.style.marginBottom = '0px';
overlay.appendChild(tokensOwnedValueDisplay);

// Settings button
const settingsButton = document.createElement('button');
settingsButton.innerText = '⚙️';
settingsButton.style.position = 'absolute';
settingsButton.style.top = '10px';
settingsButton.style.right = '40px';
settingsButton.style.border = 'none';
settingsButton.style.background = 'transparent';
settingsButton.style.cursor = 'pointer';
settingsButton.style.fontSize = '20px';
settingsButton.style.zIndex = '10001';
settingsButton.style.minWidth = '10px';
settingsButton.style.width = '10px';
overlay.appendChild(settingsButton);

// Buy button
const buyButton = document.createElement('button');
buyButton.innerText = 'Buy Amount';
buyButton.style.position = 'absolute';
buyButton.style.left = '20px';
buyButton.style.bottom = '20px';
buyButton.style.padding = '0';
buyButton.style.fontSize = '12px';
overlay.appendChild(buyButton);

// Buy input
const buyInput = document.createElement('input');
buyInput.placeholder = "Enter amount";
buyInput.style.position = 'absolute';
buyInput.style.left = '20px';
buyInput.style.bottom = '50px';
buyInput.style.padding = '0';
buyInput.style.fontSize = '12px';
overlay.appendChild(buyInput);

// buy $10 Button
const buy10Button = document.createElement('button');
buy10Button.innerText = 'Buy $10 worth';
buy10Button.style.position = 'absolute';
buy10Button.style.left = '20px';
buy10Button.style.bottom = '80px';
buy10Button.style.padding = '0';
buy10Button.style.fontSize = '12px';
overlay.appendChild(buy10Button);

// buy $100 Button
const buy100Button = document.createElement('button');
buy100Button.innerText = 'Buy $100 worth';
buy100Button.style.position = 'absolute';
buy100Button.style.left = '20px';
buy100Button.style.bottom = '110px';
buy100Button.style.padding = '0';
buy100Button.style.fontSize = '12px';
overlay.appendChild(buy100Button);

// Sell button
const sellButton = document.createElement('button');
sellButton.innerText = 'Sell Amount';
sellButton.style.position = 'absolute';
sellButton.style.right = '20px';
sellButton.style.bottom = '20px';
sellButton.style.padding = '0';
sellButton.style.fontSize = '12px';
overlay.appendChild(sellButton);

// Sell input
const sellInput = document.createElement('input');
sellInput.placeholder = "Enter amount";
sellInput.style.position = 'absolute';
sellInput.style.right = '20px';
sellInput.style.bottom = '50px';
sellInput.style.padding = '0';
sellInput.style.fontSize = '12px';
overlay.appendChild(sellInput);

// Sell 25 Button
const sell25Button = document.createElement('button');
sell25Button.innerText = 'Sell 25%';
sell25Button.style.position = 'absolute';
sell25Button.style.right = '20px';
sell25Button.style.bottom = '80px';
sell25Button.style.padding = '0';
sell25Button.style.fontSize = '12px';
overlay.appendChild(sell25Button);

// sell 50 Button
const sell50Button = document.createElement('button');
sell50Button.innerText = 'Sell 50%';
sell50Button.style.position = 'absolute';
sell50Button.style.right = '20px';
sell50Button.style.bottom = '110px';
sell50Button.style.padding = '0';
sell50Button.style.fontSize = '12px';
overlay.appendChild(sell50Button);

// sell 100 Button
const sell100Button = document.createElement('button');
sell100Button.innerText = 'Sell 100%';
sell100Button.style.position = 'absolute';
sell100Button.style.right = '20px';
sell100Button.style.bottom = '140px';
sell100Button.style.padding = '0';
sell100Button.style.fontSize = '12px';
overlay.appendChild(sell100Button);

// Append the overlay to the document body
document.body.appendChild(overlay);

// Wallet Popup div
const walletPopup = document.createElement('div');
walletPopup.id = 'wallet-popup';
Object.assign(walletPopup.style, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '280px',
  height: '130px',
  padding: '15px',
  zIndex: '10000',
  textAlign: 'center',
  display: 'none'
});

const walletHeader = document.createElement('div');
walletHeader.innerText = 'Set Wallet Amount';
walletHeader.style.fontWeight = 'bold';
walletHeader.style.marginBottom = '10px';
walletHeader.style.cursor = 'move';
walletPopup.appendChild(walletHeader);

const walletInput = document.createElement('input');
walletInput.placeholder = 'Enter $';
walletInput.style.width = '80%';
walletPopup.appendChild(walletInput);

const confirmWalletButton = document.createElement('button');
confirmWalletButton.innerText = 'Confirm';
confirmWalletButton.style.position = 'absolute';
confirmWalletButton.style.left = '20px';
confirmWalletButton.style.bottom = '20px';
walletPopup.appendChild(confirmWalletButton);

const cancelWalletButton = document.createElement('button');
cancelWalletButton.innerText = 'Cancel';
cancelWalletButton.style.position = 'absolute';
cancelWalletButton.style.right = '20px';
cancelWalletButton.style.bottom = '20px';
walletPopup.appendChild(cancelWalletButton);

document.body.appendChild(walletPopup);


// Global variables
let currentWalletAmount = 0;
let originalWalletAmount = 0;
let absoluteFee = 0.5;
let percentageFee = 3;
let ownedTokens = 0;
let ownedTokensValue = 0;
let originalInvestment = 0;

// Add dragging to div function
function makeDraggable(element, handle) {
  let isDragging = false;
  let offsetX, offsetY;

  // listen for mouse down and ad draging listners 
  handle.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - element.offsetLeft;
    offsetY = e.clientY - element.offsetTop;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    e.preventDefault();
  });

  // draging
  function onMouseMove(e) {
    if (isDragging) {
      element.style.left = `${e.clientX - offsetX}px`;
      element.style.top = `${e.clientY - offsetY}px`;
    }
  }
  // remove mouse down listeners and stop dragging if mouse up
  function onMouseUp() {
    isDragging = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }
}

makeDraggable(overlay, header);
makeDraggable(walletPopup, walletHeader);

// Sync storage - GPT CODE
function syncStorage() {
  chrome.storage.local.get([
    "currentWalletAmount",
    "originalWalletAmount",
    "percentageFee",
    "absoluteFee"
  ], (data) => {
    // Wallet amounts
    if (data.currentWalletAmount !== undefined) {
      currentWalletAmount = data.currentWalletAmount;
      walletDisplay.innerText = `Wallet: $${currentWalletAmount.toFixed(2)}`;
    } else {
      currentWalletAmount = 250;
      walletDisplay.innerText = `Wallet: $${currentWalletAmount.toFixed(2)}`;
    }
    if (data.originalWalletAmount !== undefined) {
      originalWalletAmount = data.originalWalletAmount;
    } else {
      originalWalletAmount = 250;
    }

    // Settings
    if (data.absoluteFee !== undefined) {
      absoluteFee = data.absoluteFee;
      if (settingInputs.absoluteFee) {
        settingInputs.absoluteFee.value = absoluteFee;
      }
    }
    if (data.percentageFee !== undefined) {
      percentageFee = data.percentageFee;
      if (settingInputs.percentageFee) {
        settingInputs.percentageFee.value = percentageFee;
      }
    }
  });
}
syncStorage();

// Settings Popup
const settingsPopup = document.createElement('div');
settingsPopup.id = 'settings-popup';
Object.assign(settingsPopup.style, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '300px',
  padding: '15px',
  zIndex: '10000',
  textAlign: 'center',
  display: 'none',
});
// header
const settingsHeader = document.createElement('div');
settingsHeader.innerText = 'Settings';
settingsHeader.style.fontWeight = 'bold';
settingsHeader.style.marginBottom = '10px';
settingsHeader.style.cursor = 'move';
settingsPopup.appendChild(settingsHeader);

makeDraggable(settingsPopup, settingsHeader);

// Function to create title and input for each setting
const createSettingInput = (labelText, key, value) => {
  const container = document.createElement('div');
  container.style.marginBottom = '10px';

  const label = document.createElement('label');
  label.innerText = labelText;
  label.style.display = 'block';
  label.style.marginBottom = '3px';

  const input = document.createElement('input');
  input.style.width = '80%';
  input.style.fontSize = '12px';
  input.value = value;

  container.appendChild(label);
  container.appendChild(input);

  return { container, input, key };
};

// calling creatSettingInput for each setting
const settingInputs = {};
const settingsData = [
  { label: 'Percentage Fee (%)', key: 'percentageFee', value: percentageFee },
  { label: 'Absolute Fee ($)', key: 'absoluteFee', value: absoluteFee }
];

settingsData.forEach(item => {
  const { container, input, key } = createSettingInput(item.label, item.key, item.value);
  settingsPopup.appendChild(container);
  settingInputs[key] = input;
});

// Confirm button - save new settings to chrome.storage.local
const confirmSettingsButton = document.createElement('button');
confirmSettingsButton.innerText = 'Confirm';
confirmSettingsButton.style.fontSize = '12px';
confirmSettingsButton.style.marginTop = '10px';
confirmSettingsButton.addEventListener('click', () => {
  const newSettings = {};
  Object.keys(settingInputs).forEach(key => {
    newSettings[key] = parseFloat(settingInputs[key].value) || 0;
  });

  // Save to storage
  chrome.storage.local.set(newSettings, () => {
    settingsPopup.style.display = 'none';
  });
});
settingsPopup.appendChild(confirmSettingsButton);

// closes popup without saving changes
const cancelSettingsButton = document.createElement('button');
cancelSettingsButton.innerText = 'Cancel';
cancelSettingsButton.style.fontSize = '12px';
cancelSettingsButton.style.marginTop = '10px';
cancelSettingsButton.style.marginLeft = '10px';
cancelSettingsButton.addEventListener('click', () => {
  // Close popup and revert any changed input fields to last saved state
  settingsPopup.style.display = 'none';
  syncStorage();
});
settingsPopup.appendChild(cancelSettingsButton);

document.body.appendChild(settingsPopup);

// Show settings popup
settingsButton.addEventListener('click', () => {
  settingsPopup.style.display = 'block';
  // Load the latest settings from storage
  syncStorage();
});

// Wallet button
// Show wallet popup
walletButton.addEventListener('click', () => {
  walletPopup.style.display = 'block';
});

// Confirm new wallet amount
confirmWalletButton.addEventListener('click', () => {
  const newAmount = parseFloat(walletInput.value);
  if (!isNaN(newAmount) && newAmount >= 0) {
    currentWalletAmount = newAmount;
    originalWalletAmount = newAmount;
    // Save to local storage
    chrome.storage.local.set({ currentWalletAmount, originalWalletAmount });
    walletDisplay.innerText = `Wallet: $${currentWalletAmount.toFixed(2)}`;
    walletPopup.style.display = 'none';

    // open ad
    //window.open('https://maximdieball.github.io/ads-host/', '_blank');
  }
});

// Cancel new wallet amount
cancelWalletButton.addEventListener('click', () => {
  walletPopup.style.display = 'none';
  // Revert wallet input
  walletInput.value = currentWalletAmount;
});

// Buy button events

buyButton.addEventListener('click', () => {
  const amount = parseFloat(buyInput.value);
  if (!isNaN(amount) && amount >= 0) {
    createOrder(amount, buyOrder);
  }
});
buy10Button.addEventListener('click', () => {
  createOrder(10, buyOrder);
});
buy100Button.addEventListener('click', () => {
  createOrder(100, buyOrder);
});

// Sell button events

sellButton.addEventListener('click', () => {
  const amount = parseFloat(sellInput.value);
  if (!isNaN(amount) && amount >= 0) {
    createOrder(amount, sellOrder);
  }
});
sell25Button.addEventListener('click', () => {
  createOrder(25, percentageSellOrder);
});
sell50Button.addEventListener('click', () => {
  createOrder(50, percentageSellOrder);
});
sell100Button.addEventListener('click', () => {
  createOrder(100, percentageSellOrder);
});

// storage listener - GPT Written
chrome.storage.onChanged.addListener((changes) => {
  // Wallet updates
  if (changes.currentWalletAmount) {
    currentWalletAmount = changes.currentWalletAmount.newValue;
    walletDisplay.innerText = `Wallet: $${currentWalletAmount.toFixed(2)}`;
  }
  if (changes.originalWalletAmount) {
    originalWalletAmount = changes.originalWalletAmount.newValue;
  }

  // Settings updates (instant sync across tabs)
  if (changes.percentageFee && settingInputs.percentageFee) {
    percentageFee = changes.percentageFee.newValue;
    settingInputs.percentageFee.value = percentageFee;
  }
  if (changes.absoluteFee && settingInputs.absoluteFee) {
    absoluteFee = changes.absoluteFee.newValue;
    settingInputs.absoluteFee.value = absoluteFee;
  }
});

// update function (loop)
let price = 0;
let liquidity = 0;
function update() {
  const priceElement = document.querySelector('.p-show__widget__td__value[data-cable-val="priceUsd"]');
  const liquidityElement = document.querySelector('.p-show__widget__td__value[data-cable-val="usdLiquidity"]');
  let lowLiquidityMultiplier = 1

  // update liquidity
  if (liquidityElement) {
    const photonLiquidityValue = liquidityElement.getAttribute('data-value');
    liquidity = parseFloat(photonLiquidityValue);
  }

  if (priceElement) {
    // update price
    const photonPriceValue = priceElement.getAttribute('data-value');
    price = parseFloat(photonPriceValue);
    if (liquidity > 9000) {
      priceDisplay.innerText = `Current Price: $${price.toFixed(19)} `;
    }
    else {
      priceDisplay.innerHTML = `Current Price: $${price.toFixed(19)} <span style="color: #ff7f7f; font-size: 10px;">LOW LIQUIDITY</span>`;

    }

    // update owned tokens value
    if (ownedTokens > 0) {
      ownedTokensValue = ownedTokens * price;

      // calculate higher loss due to low liqudity
      if (liquidity < 8000) {
        lowLiquidityMultiplier = 0.01;
      }
      else if (liquidity < 9000) {
        lowLiquidityMultiplier = (liquidity - 8000) * (10 ** -3);
        console.log("lowLiquidityMultiplier:", lowLiquidityMultiplier);
      }

      let tokenGainsPercentage = ownedTokensValue*lowLiquidityMultiplier / originalInvestment * 100 - 100;
      tokenGainsPercentage = tokenGainsPercentage.toFixed(1);
      if (tokenGainsPercentage < 0) {
        tokenGainsPercentage = String(tokenGainsPercentage);
      } else {
        tokenGainsPercentage = "+" + String(tokenGainsPercentage);
      }
      let percentageColor = tokenGainsPercentage <= 0 ? "#ff7f7f" : "#90ee90";
      tokensOwnedValueDisplay.innerHTML = `Tokens Value: $${(ownedTokensValue*lowLiquidityMultiplier).toFixed(2)} <span style="color: ${percentageColor};">${tokenGainsPercentage}%</span>`;
    }
  }

    // update wallet gain percentage display
    let gainsPercentage = (currentWalletAmount) / originalWalletAmount * 100 - 100;
    gainsPercentage = gainsPercentage.toFixed(1);
    if (gainsPercentage < 0) {
      gainsPercentage = String(gainsPercentage);
    } else {
      gainsPercentage = "+" + String(gainsPercentage);
    }
    let percentageColor = gainsPercentage < 0 ? "#ff7f7f" : "#90ee90";
    walletGainPercentageDisplay.innerHTML = `<span style="color: ${percentageColor};">${gainsPercentage}%</span>`;

}


setInterval(update, 250);

// loading popup for orders
function createOrder(amount, orderFunction) {
  const popup = document.createElement('div');
  popup.id = 'buy-loading-popup';
  Object.assign(popup.style, {
    position: 'fixed',
    top: '50px',
    left: '50px',
    zIndex: '9999',
    padding: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'
  });

  const text = document.createElement('div');
  text.textContent = 'Processing Order...';
  popup.appendChild(text);

  // porograss bar container
  const progressContainer = document.createElement('div');
  progressContainer.style.width = '200px';
  progressContainer.style.height = '20px';
  progressContainer.style.backgroundColor = '#ddd';
  progressContainer.style.margin = '10px auto';
  progressContainer.style.borderRadius = '10px';
  popup.appendChild(progressContainer);

  //progress bar in container
  const progressBar = document.createElement('div');
  progressBar.style.width = '0%';
  progressBar.style.height = '100%';
  progressBar.style.backgroundColor = 'rgb(72,61,139)';
  progressBar.style.border = '1px'
  progressBar.style.borderRadius = '10px';
  progressContainer.appendChild(progressBar);

  document.body.appendChild(popup);

  // play animation
  const duration = 1000; // 1s
  let start = null;

  function animate(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const percent = Math.min(progress / duration, 1);
    progressBar.style.width = `${percent * 100}%`;

    if (percent < 1) {
      requestAnimationFrame(animate);
    } else {
      popup.remove();
      // actually process order
      orderFunction(amount);
    }
  }

  requestAnimationFrame(animate);
}

// Order function

function buyOrder(amount) {
  // Checking if any coin is selected
  if (priceDisplay.innerText == "Current Price: Loading...") {
    return;
  }
  // Calculate price with fees
  trueOrderPrice = amount + amount * (percentageFee / 100) + absoluteFee;
  // check wallet balance
  if (currentWalletAmount - trueOrderPrice < 0) {
    alert('Not enough money in wallet!');
    return
  }
  // calculate new info
  currentWalletAmount = currentWalletAmount - trueOrderPrice;
  ownedTokens = ownedTokens + Math.floor(amount / price);
  ownedTokensValue = ownedTokens * price;
  originalInvestment = originalInvestment + trueOrderPrice;

  // display new info
  tokensOwnedDisplay.innerText = `Tokens Owned:   ${ownedTokens}`;
  tokensOwnedValueDisplay.innerText = `Tokens Value: $${ownedTokensValue.toFixed(2)}`;
  walletDisplay.innerText = `Wallet: $${currentWalletAmount.toFixed(2)}`;

  // update synced wallet amount
  chrome.storage.local.set({ currentWalletAmount: currentWalletAmount }, () => {
    console.log("Wallet amount updated in storage:", currentWalletAmount);
  });
}

function sellOrder(amount) {
  console.log("orignial invest before", originalInvestment);
  // check if any coins is selected
  if (priceDisplay.innerText == "Current Price: Loading...") {
    return;
  }
  // check token amount
  if (ownedTokensValue - amount < 0) {
    alert(`Not enough Tokens  amount:${amount}`);
    return
  }
  // calculate the new amount of tokens
  ownedTokens = ownedTokens - Math.ceil(amount / price);

  // calculate liquidity multiplier for highers losses on liquidity lower than 9000 / simulating pumpfun liquidity
  let lowLiquidityMultiplier = 1;
  if (liquidity < 8000) {
    lowLiquidityMultiplier = 0.01;
  }
  else if (liquidity < 9000) {
    lowLiquidityMultiplier = (liquidity - 8000) * (10 ** -3);
    console.log("lowLiquidityMultiplier:", lowLiquidityMultiplier);
  }
  amount = amount * lowLiquidityMultiplier;
  currentWalletAmount = currentWalletAmount + amount;
  ownedTokensValue = ownedTokens * price;

  if (ownedTokens > 0) {
    originalInvestment = originalInvestment - amount;
  } else {
    originalInvestment = 0;
  }

  // display new info
  tokensOwnedDisplay.innerText = `Tokens Owned:   ${ownedTokens}`;
  tokensOwnedValueDisplay.innerText = `Tokens Value: $${ownedTokensValue.toFixed(2)}`;
  walletDisplay.innerText = `Wallet: $${currentWalletAmount.toFixed(2)}`;

  // update synced wallet amount
  chrome.storage.local.set({ currentWalletAmount: currentWalletAmount }, () => {
    console.log("Wallet amount updated in storage:", currentWalletAmount);
  });
  console.log("amount after", amount);
  console.log("orignial invest after", originalInvestment);

}

function percentageSellOrder(percentage) {

  if (percentage < 0 || percentage > 100) {
    alert(`invalid percentage`);
    return
  }
  sellOrder(ownedTokensValue * (percentage / 100))
}
