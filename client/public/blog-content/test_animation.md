---
title: "Central Limit Theorem: Interactive Simulation"
slug: "clt-interactive-simulation"
excerpt: "An interactive demonstration of the Central Limit Theorem using Monte Carlo simulation."
publishedAt: "2024-02-16"
readTime: "8 min read"
tags:
  - Statistics
  - Simulation
  - Interactive
featured: true
---

# Central Limit Theorem: Interactive Simulation

The Central Limit Theorem (CLT) states that the sampling distribution of the sample mean approaches a normal distribution as the sample size increases, regardless of the population's distribution.

## Interactive Demo

Click the button to run a simulation with 10,000 samples of size 30.

<div class="simulation-container">
  <div class="controls">
    <button id="runBtn" class="btn-primary">Run Simulation</button>
    <button id="clearBtn" class="btn-secondary">Clear</button>
  </div>
  <canvas id="simCanvas" width="700" height="400"></canvas>
  <div id="stats" class="stats-display"></div>
</div>

<style>
.simulation-container {
  background: #f7fafc;
  padding: 30px;
  border-radius: 12px;
  margin: 30px 0;
  text-align: center;
}

.controls {
  margin-bottom: 20px;
}

.btn-primary {
  background: #4299e1;
  color: white;
  border: none;
  padding: 12px 32px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  margin-right: 10px;
}

.btn-primary:hover {
  background: #3182ce;
}

.btn-secondary {
  background: #e53e3e;
  color: white;
  border: none;
  padding: 12px 32px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
}

.btn-secondary:hover {
  background: #c53030;
}

#simCanvas {
  border: 2px solid #cbd5e0;
  border-radius: 8px;
  background: white;
  max-width: 100%;
  display: block;
  margin: 0 auto;
}

.stats-display {
  margin-top: 15px;
  font-size: 14px;
  color: #4a5568;
}
</style>

<script>
(function() {
  const runBtn = document.getElementById('runBtn');
  const clearBtn = document.getElementById('clearBtn');
  const canvas = document.getElementById('simCanvas');
  const ctx = canvas.getContext('2d');
  const statsDiv = document.getElementById('stats');
  
  clearBtn.onclick = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    statsDiv.innerHTML = '';
  };
  
  runBtn.onclick = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const numSamples = 10000;
    const sampleSize = 30;
    const means = [];
    
    for (let i = 0; i < numSamples; i++) {
      let sum = 0;
      for (let j = 0; j < sampleSize; j++) {
        sum += Math.random();
      }
      means.push(sum / sampleSize);
    }
    
    const mean = means.reduce((a, b) => a + b, 0) / means.length;
    const variance = means.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / means.length;
    const stdDev = Math.sqrt(variance);
    
    const numBins = 50;
    const histogram = new Array(numBins).fill(0);
    const minVal = Math.min(...means);
    const maxVal = Math.max(...means);
    const binWidth = (maxVal - minVal) / numBins;
    
    means.forEach(m => {
      const binIndex = Math.min(Math.floor((m - minVal) / binWidth), numBins - 1);
      histogram[binIndex]++;
    });
    
    const maxCount = Math.max(...histogram);
    const barWidth = (canvas.width - 100) / numBins;
    const maxBarHeight = canvas.height - 80;
    
    ctx.fillStyle = '#4299e1';
    histogram.forEach((count, i) => {
      const barHeight = (count / maxCount) * maxBarHeight;
      const x = 50 + i * barWidth;
      const y = canvas.height - 50 - barHeight;
      ctx.fillRect(x, y, barWidth - 1, barHeight);
    });
    
    ctx.strokeStyle = '#2d3748';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(50, canvas.height - 50);
    ctx.lineTo(canvas.width - 50, canvas.height - 50);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(50, 20);
    ctx.lineTo(50, canvas.height - 50);
    ctx.stroke();
    
    ctx.fillStyle = '#2d3748';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Distribution of Sample Means (n=' + sampleSize + ')', canvas.width / 2, 20);
    
    ctx.font = '12px Arial';
    ctx.fillText('Sample Mean', canvas.width / 2, canvas.height - 10);
    
    ctx.save();
    ctx.translate(15, canvas.height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Frequency', 0, 0);
    ctx.restore();
    
    statsDiv.innerHTML = 'Mean: ' + mean.toFixed(4) + ' | Std Dev: ' + stdDev.toFixed(4) + 
                         ' | Theoretical Mean: 0.500 | Theoretical Std Dev: ' + 
                         (Math.sqrt(1/12) / Math.sqrt(sampleSize)).toFixed(4);
  };
})();
</script>

## Theoretical Background

For a random sample from any distribution with mean $\mu$ and variance $\sigma^2$:

$$
\bar{X} \sim N\left(\mu, \frac{\sigma^2}{n}\right)
$$

For Uniform(0,1): $\mu = 0.5$, $\sigma^2 = \frac{1}{12}$

With $n = 30$:

$$
\bar{X} \sim N\left(0.5, \frac{1}{360}\right)
$$

Standard deviation: $\sigma_{\bar{X}} = \sqrt{\frac{1}{360}} \approx 0.0527$

## Try It!

Click "Run Simulation" multiple times and observe:
- The bell-shaped curve
- Mean stays around 0.5
- Standard deviation matches theory