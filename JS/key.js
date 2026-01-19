document.addEventListener('DOMContentLoaded', () => {
  // =========================
  // ===== key.js content =====
  // =========================

  // ===== Outputs =====
  const FurnaceFCText = document.getElementById('furnaceFC');
  const FurnaceRCText = document.getElementById('furnaceRC');

  const EmbassyFCText = document.getElementById('embassyFC');
  const EmbassyRCText = document.getElementById('embassyRC');

  const CommandCenterFCText = document.getElementById('commandCenterFC');
  const CommandCenterRCText = document.getElementById('commandCenterRC');

  const InfantryCampFCText = document.getElementById('infantryCampFC');
  const InfantryCampRCText = document.getElementById('infantryCampRC');

  const LancerCampFCText = document.getElementById('lancerCampFC');
  const LancerCampRCText = document.getElementById('lancerCampRC');

  const MarksmanCampFCText = document.getElementById('marksmanCampFC');
  const MarksmanCampRCText = document.getElementById('marksmanCampRC');

  const InfirmaryFCText = document.getElementById('infirmaryFC');
  const InfirmaryRCText = document.getElementById('infirmaryRC');

  const WarAcademyFCText = document.getElementById('warAcademyFC');
  const WarAcademyRCText = document.getElementById('warAcademyRC');

  // ===== Totals outputs =====
  const TotalFCText = document.getElementById('totalFC');
  const TotalRCText = document.getElementById('totalRC');

  // ===== Mirrored totals outputs =====
  const RCOutputText = document.getElementById('rc-output');
  const FCOutputText = document.getElementById('fc-output');

  // ===== Cost output targets (optional) =====
  const WeeklyCostNoDiscountText  = document.getElementById('weeklyCostNoDiscount');
  const WeeklyCostWithDiscountText= document.getElementById('weeklyCostWithDiscount');
  const TotalCostNoDiscountText   = document.getElementById('totalCostNoDiscount');
  const TotalCostWithDiscountText = document.getElementById('totalCostWithDiscount');
  const DiscountWhereText         = document.getElementById('discountWhere');

  // ===== Speedup time output =====
  const SpeedupOutputText = document.getElementById('speedup-output');

  // ===== Resource totals outputs =====
  const WoodOutputText = document.getElementById('wood-output');
  const MeatOutputText = document.getElementById('meat-output');
  const CoalOutputText = document.getElementById('coal-output');
  const IronOutputText = document.getElementById('iron-output');

  // ================================
  // ===== Construction buffs inputs
  // ================================
  const ConstructionSpeedInput = document.getElementById('construction-speed-input'); // number like 80 => +80%
  const DoubleTimeCheckbox = document.getElementById('double-time-checkbox');         // +20%
  const VicePresidentCheckbox = document.getElementById('vice-president-checkbox');   // +10%

  // Agnes dropdown id (change this if your HTML uses a different id)
  const AgnesLevelDropdown = document.getElementById('agnes-level');

  // Agnes hours removed per build, by level
  const AGNES_HOURS_BY_LEVEL = { 0: 0, 1: 2, 2: 3, 3: 4, 4: 6, 5: 8 };

  const HyenaLevelDropdown = document.getElementById('hyena-level');

  const HYENA_PERCENT_BY_LEVEL = { 0: 0, 1: 5, 2: 7, 3: 9, 4: 12, 5: 15 };


  // ===== Requirements =====
  const UpgradeRequirement = {
    // Furnace
    Furnace5: { FC: 0, RC: 0, Meat: 0, Wood: 0, Coal: 0, Iron: 0, Time: 0 },
    Furnace6: { FC: 900, RC: 60, Meat: 480000000, Wood: 480000000, Coal: 95000000, Iron: 24000000, Time: 6480000 },
    Furnace7: { FC: 1080, RC: 90, Meat: 500000000, Wood: 500000000, Coal: 105000000, Iron: 27000000, Time: 7776000 },
    Furnace8: { FC: 1080, RC: 120, Meat: 650000000, Wood: 650000000, Coal: 130000000, Iron: 33000000, Time: 8640000 },

    // Embassy
    Embassy5: { FC: 0, RC: 0, Meat: 0, Wood: 0, Coal: 0, Iron: 0, Time: 0 },
    Embassy6: { FC: 225, RC: 13, Meat: 95000000, Wood: 95000000, Coal: 19000000, Iron: 4800000, Time: 4276800 },
    Embassy7: { FC: 270, RC: 19, Meat: 105000000, Wood: 105000000, Coal: 21500000, Iron: 5000000, Time: 5132100 },
    Embassy8: { FC: 270, RC: 30, Meat: 130000000, Wood: 130000000, Coal: 26500000, Iron: 6500000, Time: 5702400 },

    // Infantry Camp
    InfantryCamp5: { FC: 0, RC: 0, Meat: 0, Wood: 0, Coal: 0, Iron: 0, Time: 0 },
    InfantryCamp6: { FC: 405, RC: 25, Meat: 165000000, Wood: 165000000, Coal: 33500000, Iron: 8000000, Time: 972000 },
    InfantryCamp7: { FC: 486, RC: 37, Meat: 190000000, Wood: 190000000, Coal: 38000000, Iron: 9500000, Time: 1180800 },
    InfantryCamp8: { FC: 486, RC: 54, Meat: 230000000, Wood: 230000000, Coal: 46500000, Iron: 11500000, Time: 1296000 },

    // Marksman Camp
    MarksmanCamp5: { FC: 0, RC: 0, Meat: 0, Wood: 0, Coal: 0, Iron: 0, Time: 0 },
    MarksmanCamp6: { FC: 405, RC: 25, Meat: 165000000, Wood: 165000000, Coal: 33500000, Iron: 8000000, Time: 972000 },
    MarksmanCamp7: { FC: 486, RC: 37, Meat: 190000000, Wood: 190000000, Coal: 38000000, Iron: 9500000, Time: 1180800 },
    MarksmanCamp8: { FC: 486, RC: 54, Meat: 230000000, Wood: 230000000, Coal: 46500000, Iron: 11500000, Time: 1296000 },

    // Lancer Camp
    LancerCamp5: { FC: 0, RC: 0, Meat: 0, Wood: 0, Coal: 0, Iron: 0, Time: 0 },
    LancerCamp6: { FC: 405, RC: 25, Meat: 165000000, Wood: 165000000, Coal: 33500000, Iron: 8000000, Time: 972000 },
    LancerCamp7: { FC: 486, RC: 37, Meat: 190000000, Wood: 190000000, Coal: 38000000, Iron: 9500000, Time: 1180800 },
    LancerCamp8: { FC: 486, RC: 54, Meat: 230000000, Wood: 230000000, Coal: 46500000, Iron: 11500000, Time: 1296000 },

    // Command Center
    CommandCenter5: { FC: 0, RC: 0, Meat: 0, Wood: 0, Coal: 0, Iron: 0, Time: 0 },
    CommandCenter6: { FC: 180, RC: 13, Meat: 145000000, Wood: 145000000, Coal: 29000000, Iron: 7000000, Time: 777600 },
    CommandCenter7: { FC: 216, RC: 19, Meat: 160000000, Wood: 160000000, Coal: 32500000, Iron: 7500000, Time: 891000 },
    CommandCenter8: { FC: 216, RC: 24, Meat: 195000000, Wood: 195000000, Coal: 39500000, Iron: 9500000, Time: 1047600 },

    // Infirmary
    Infirmary5: { FC: 0, RC: 0, Meat: 0, Wood: 0, Coal: 0, Iron: 0, Time: 0 },
    Infirmary6: { FC: 180, RC: 13, Meat: 120000000, Wood: 120000000, Coal: 24000000, Iron: 6000000, Time: 907200 },
    Infirmary7: { FC: 216, RC: 19, Meat: 135000000, Wood: 135000000, Coal: 27000000, Iron: 6500000, Time: 1096400 },
    Infirmary8: { FC: 216, RC: 24, Meat: 165000000, Wood: 165000000, Coal: 33000000, Iron: 8000000, Time: 1209600 },

    // War Academy
    WarAcademy5: { FC: 0, RC: 0, Meat: 0, Wood: 0, Coal: 0, Iron: 0, Time: 0 },
    WarAcademy6: { FC: 405, RC: 25, Meat: 240000000, Wood: 240000000, Coal: 48000000, Iron: 12000000, Time: 1296000 },
    WarAcademy7: { FC: 486, RC: 37, Meat: 270000000, Wood: 270000000, Coal: 50000000, Iron: 13500000, Time: 1555200 },
    WarAcademy8: { FC: 486, RC: 54, Meat: 330000000, Wood: 330000000, Coal: 65000000, Iron: 16500000, Time: 1728000 },
  };

  // ===== Dropdowns =====
  const FurnaceFromDropdown = document.getElementById('furnace-from');
  const FurnaceToDropdown   = document.getElementById('furnace-to');

  const EmbassyFromDropdown = document.getElementById('embassy-from');
  const EmbassyToDropdown   = document.getElementById('embassy-to');

  const CommandCenterFromDropdown = document.getElementById('command-center-from');
  const CommandCenterToDropdown   = document.getElementById('command-center-to');

  const InfantryCampFromDropdown = document.getElementById('infantry-camp-from');
  const InfantryCampToDropdown   = document.getElementById('infantry-camp-to');

  const LancerCampFromDropdown = document.getElementById('lancer-camp-from');
  const LancerCampToDropdown   = document.getElementById('lancer-camp-to');

  const MarksmanCampFromDropdown = document.getElementById('marksman-camp-from');
  const MarksmanCampToDropdown   = document.getElementById('marksman-camp-to');

  const InfirmaryFromDropdown = document.getElementById('infirmary-from');
  const InfirmaryToDropdown   = document.getElementById('infirmary-to');

  const WarAcademyFromDropdown = document.getElementById('war-academy-from');
  const WarAcademyToDropdown   = document.getElementById('war-academy-to');

  // ===== Global Dropdowns =====
  const GlobalFromDropdown = document.getElementById('global-from');
  const GlobalToDropdown   = document.getElementById('global-to');

  const WeekInput = document.getElementById('week-input');
  const StartingRCInput = document.getElementById('startingRCinput');

  if (WeekInput) WeekInput.value = 10;
  if (StartingRCInput) StartingRCInput.value = 0;

  document.querySelectorAll('.numeric-input').forEach(input => {
    input.addEventListener('focus', () => input.select());
    input.addEventListener('input', () => {
      let value = input.value.replace(/\D+/g, '');
      if (value === '') value = '0';
      input.value = value;
    });
  });

  // ===== Refinement Table =====
  const CostOutputText = document.getElementById('cost-output');
  const RefinementsPerWeekOutputText = document.getElementById('refinement-per-week-output');

  const DayOutputs = [
    document.getElementById('day1output'),
    document.getElementById('day2output'),
    document.getElementById('day3output'),
    document.getElementById('day4output'),
    document.getElementById('day5output'),
    document.getElementById('day6output'),
    document.getElementById('day7output'),
  ];

  // =============================
  // ===== dropdown.js content ====
  // =============================

  function handleTowerChange({ towerType, fromDropdown, toDropdown, fcOutput, rcOutput }) {
    const fromValue = Number(fromDropdown.value);
    const toValue   = Number(toDropdown.value);

    if (fromValue > toValue) {
      fcOutput.textContent = "NA";
      rcOutput.textContent = "NA";
      return { FC: 0, RC: 0 };
    }

    return RequirementCalculator(fromValue, toValue, towerType, fcOutput, rcOutput);
  }

  function RequirementCalculator(fromValue, toValue, towerType, fcOutput, rcOutput) {
    if (fromValue === toValue) {
      fcOutput.textContent = 0;
      rcOutput.textContent = 0;
      return { FC: 0, RC: 0 };
    }

    let totalFC = 0;
    let totalRC = 0;

    for (let level = fromValue + 1; level <= toValue; level++) {
      const key = `${towerType}${level}`;
      const data = UpgradeRequirement[key];
      if (!data) continue;

      totalFC += data.FC;
      totalRC += data.RC;
    }

    fcOutput.textContent = totalFC.toLocaleString();
    rcOutput.textContent = totalRC.toLocaleString();

    return { FC: totalFC, RC: totalRC };
  }

  // ===== Registry + app state =====
  const buildingRegistry = [];

  const appState = {
    grandFC: 0,
    grandRC: 0,

    grandTimeSeconds: 0,
    grandBuildCount: 0, // NEW: counts compressed builds for Agnes (each FC step = 5 builds)

    grandMeat: 0,
    grandWood: 0,
    grandCoal: 0,
    grandIron: 0,

    refinementFC: 0, // total FC cost from refinements (spins)
  };

  // Helper: ALWAYS update combined FC output from current state
  function updateCombinedFCOutput() {
    if (!FCOutputText) return;
    const combinedFC = (appState.grandFC || 0) + (appState.refinementFC || 0);
    FCOutputText.textContent = combinedFC.toLocaleString();
  }

  // ==========================
  // ===== COST MATH ======
  // ==========================
  const TIER_SPINS = 20;
  const TIER_COSTS = [20, 50, 100, 130, 160];

  function tierIndexForSpin(spinIndex) {
    return Math.min(Math.floor((spinIndex - 1) / TIER_SPINS), TIER_COSTS.length - 1);
  }

  function costForSpin(spinIndex) {
    return TIER_COSTS[tierIndexForSpin(spinIndex)];
  }

  function computeWeeklyCost(spinsPerWeek, dayPlan) {
    let baseCost = 0;
    for (let s = 1; s <= spinsPerWeek; s++) baseCost += costForSpin(s);

    let discountTotal = 0;
    const discounted = [];

    let used = 0;
    for (let day = 0; day < dayPlan.length; day++) {
      const spinsToday = dayPlan[day] || 0;
      if (spinsToday <= 0) continue;

      const discountSpinIndex = used + 1;
      const full = costForSpin(discountSpinIndex);
      const disc = full * 0.5;

      discountTotal += disc;

      discounted.push({
        day: day + 1,
        spinIndex: discountSpinIndex,
        tier: tierIndexForSpin(discountSpinIndex) + 1,
        fullCost: full,
        discount: disc
      });

      used += spinsToday;
      if (used >= spinsPerWeek) break;
    }

    return {
      baseCost,
      discountedCost: baseCost - discountTotal,
      discountTotal,
      discounted
    };
  }

  function calculateWeeks(weeks, startingRefined, refinedCost) {
    const tierEPS = [1.45, 2.15, 3.18, 3.435, 3.71];
    const maxSpins = 20;

    let totalSpins = 0;
    let totalRefined = startingRefined;
    let remaining = refinedCost - totalRefined;

    for (let t = 0; t < tierEPS.length; t++) {
      if (remaining <= 0) break;

      const eps = tierEPS[t];
      const maxThisTier = maxSpins * weeks;

      if (eps * maxThisTier >= remaining) {
        const spins = Math.ceil(remaining / eps);
        const refined = Math.floor(spins * eps);

        totalSpins += spins;
        totalRefined += refined;
        remaining = refinedCost - totalRefined;
        break;
      }

      const spins = maxThisTier;
      const refined = Math.floor(spins * eps);

      totalSpins += spins;
      totalRefined += refined;
      remaining = refinedCost - totalRefined;
    }

    if (remaining > 0) return { ok: false, error: "FAIL: Tier 5 insufficient." };

    const avgSPW = Math.ceil(totalSpins / weeks);

    const day1 = (avgSPW < 7 ? 1 : avgSPW - 6);
    const days = [];
    days[0] = day1;
    for (let i = 1; i <= 6; i++) days[i] = avgSPW > i ? 1 : 0;

    return { ok: true, days, totalSpins, totalRefined, avgSPW };
  }

  // ==============================
  // ===== TIME + RESOURCES ======
  // ==============================
  function computeTotalsForRange(fromValue, toValue, towerType) {
    if (fromValue >= toValue) {
      return { time: 0, meat: 0, wood: 0, coal: 0, iron: 0 };
    }

    let time = 0, meat = 0, wood = 0, coal = 0, iron = 0;

    for (let level = fromValue + 1; level <= toValue; level++) {
      const key = `${towerType}${level}`;
      const data = UpgradeRequirement[key];
      if (!data) continue;

      time += Number(data.Time) || 0;
      meat += Number(data.Meat) || 0;
      wood += Number(data.Wood) || 0;
      coal += Number(data.Coal) || 0;
      iron += Number(data.Iron) || 0;
    }

    return { time, meat, wood, coal, iron };
  }

  function formatSecondsToDHM(totalSeconds) {
    const s = Math.max(0, Math.floor(Number(totalSeconds) || 0));
    const DAY = 86400, HOUR = 3600, MIN = 60;

    const d = Math.floor(s / DAY);
    const h = Math.floor((s % DAY) / HOUR);
    const m = Math.floor((s % HOUR) / MIN);

    return `${d}D ${h}H ${m}M`;
  }

  function formatToMB(value) {
    const n = Math.max(0, Number(value) || 0);
    const B = 1e9;
    const M = 1e6;

    if (n >= B) return `${(n / B).toFixed(2)}B`;
    if (n >= M) return `${(n / M).toFixed(2)}M`;
    return `${n.toFixed(2)}`;
  }

  // ==============================
  // ===== Buff % handling ========
  // ==============================
  function getExtraConstructionPercent() {
    // construction-speed-input is like "80" meaning +80%
    const raw = ConstructionSpeedInput ? String(ConstructionSpeedInput.value || '') : '0';
    const city = Math.max(0, Number(raw.replace(/[^\d.]/g, '')) || 0);

    const doubleTime = DoubleTimeCheckbox && DoubleTimeCheckbox.checked ? 20 : 0;
    const vice = VicePresidentCheckbox && VicePresidentCheckbox.checked ? 10 : 0;

    // Hyena level 0-5 => adds %
    const hyenaLevelRaw = HyenaLevelDropdown ? HyenaLevelDropdown.value : "0";
    let hyenaLevel = parseInt(hyenaLevelRaw, 10);
    if (Number.isNaN(hyenaLevel)) hyenaLevel = 0;
    if (hyenaLevel < 0) hyenaLevel = 0;
    if (hyenaLevel > 5) hyenaLevel = 5;

    const hyena = HYENA_PERCENT_BY_LEVEL[hyenaLevel] || 0;

    return city + doubleTime + vice + hyena;
  }


  function applyConstructionSpeedBuff(baseSeconds) {
    const extra = getExtraConstructionPercent();
    const totalPercent = 100 + extra;
    const scaled = (Number(baseSeconds) || 0) * (100 / Math.max(1, totalPercent));
    return Math.max(0, scaled);
  }

  function getAgnesRemovedSeconds() {
    const level = AgnesLevelDropdown ? Number(AgnesLevelDropdown.value) : 0;

    const hoursPerBuild = AGNES_HOURS_BY_LEVEL[level] || 0;

    // compressed build count already accounts for the *5
    const builds = appState.grandBuildCount || 0;
    
    return hoursPerBuild * 3600 * builds;
  }

  function updateSpeedupOutput() {
    if (!SpeedupOutputText) return;

    const base = appState.grandTimeSeconds || 0;

    // 1) Apply % buffs
    const buffed = applyConstructionSpeedBuff(base);

    // 2) Apply Agnes flat reduction
    const agnesRemoved = getAgnesRemovedSeconds();

    const finalSeconds = Math.max(0, buffed - agnesRemoved);

    SpeedupOutputText.textContent = formatSecondsToDHM(finalSeconds);
  }

  function updateResourceOutputs() {
    if (MeatOutputText) MeatOutputText.textContent = formatToMB(appState.grandMeat);
    if (WoodOutputText) WoodOutputText.textContent = formatToMB(appState.grandWood);
    if (CoalOutputText) CoalOutputText.textContent = formatToMB(appState.grandCoal);
    if (IronOutputText) IronOutputText.textContent = formatToMB(appState.grandIron);
  }

  function runWeeksCalc() {
    const weeks = Number(WeekInput?.value);
    const startingRC = Number(StartingRCInput?.value);
    const refinedCost = appState.grandRC;

    // If weeks invalid OR no refined needed, refinementFC should be 0
    if (!weeks || weeks <= 0 || refinedCost <= 0) {
      appState.refinementFC = 0;
      updateCombinedFCOutput();

      DayOutputs.forEach(el => { if (el) el.textContent = 0; });

      if (CostOutputText) CostOutputText.textContent = 0;
      if (RefinementsPerWeekOutputText) RefinementsPerWeekOutputText.textContent = 0;
      if (DiscountWhereText) DiscountWhereText.textContent = "";

      updateSpeedupOutput();
      updateResourceOutputs();
      return;
    }

    const result = calculateWeeks(weeks, startingRC || 0, refinedCost);

    if (!result.ok) {
      appState.refinementFC = 0;
      updateCombinedFCOutput();

      DayOutputs.forEach(el => { if (el) el.textContent = "NA"; });

      if (CostOutputText) CostOutputText.textContent = "NA";
      if (RefinementsPerWeekOutputText) RefinementsPerWeekOutputText.textContent = "NA";
      if (DiscountWhereText) DiscountWhereText.textContent = result.error || "NA";

      updateSpeedupOutput();
      updateResourceOutputs();
      return;
    }

    // Output spins/day
    result.days.forEach((val, i) => {
      if (DayOutputs[i]) DayOutputs[i].textContent = val;
    });

    // Total refinement FC cost (WITH daily discounts)
    const spinsPerWeek = result.avgSPW;
    const weekly = computeWeeklyCost(spinsPerWeek, result.days);
    const totalWithDisc = weekly.discountedCost * weeks;

    appState.refinementFC = totalWithDisc;
    updateCombinedFCOutput();

    if (CostOutputText) CostOutputText.textContent = totalWithDisc.toLocaleString();
    if (RefinementsPerWeekOutputText) RefinementsPerWeekOutputText.textContent = spinsPerWeek.toLocaleString();

    if (DiscountWhereText) {
      const lines = weekly.discounted.map(d =>
        `Day ${d.day}: Spin #${d.spinIndex} (Tier ${d.tier}) ${d.fullCost} -> -${d.discount}`
      );
      DiscountWhereText.textContent = lines.join('\n');
    }

    updateSpeedupOutput();
    updateResourceOutputs();
  }

  function calculateGrandTotals() {
    let grandFC = 0;
    let grandRC = 0;

    let grandTimeSeconds = 0;
    let grandBuildCount = 0;

    let grandMeat = 0, grandWood = 0, grandCoal = 0, grandIron = 0;

    buildingRegistry.forEach(b => {
      grandFC += b.totalFC;
      grandRC += b.totalRC;

      grandTimeSeconds += b.totalTimeSeconds || 0;
      grandBuildCount += b.buildCount || 0;

      grandMeat += b.totalMeat || 0;
      grandWood += b.totalWood || 0;
      grandCoal += b.totalCoal || 0;
      grandIron += b.totalIron || 0;
    });

    appState.grandFC = grandFC;
    appState.grandRC = grandRC;

    appState.grandTimeSeconds = grandTimeSeconds;
    appState.grandBuildCount = grandBuildCount;

    appState.grandMeat = grandMeat;
    appState.grandWood = grandWood;
    appState.grandCoal = grandCoal;
    appState.grandIron = grandIron;

    if (TotalFCText) TotalFCText.textContent = grandFC.toLocaleString();
    if (TotalRCText) TotalRCText.textContent = grandRC.toLocaleString();

    // mirror RC into rc-output
    if (RCOutputText) RCOutputText.textContent = grandRC.toLocaleString();

    // refinedCost + time/resources + buffs → rerun week/day breakdown + costs + outputs
    runWeeksCalc();
  }

  if (WeekInput) WeekInput.addEventListener('input', runWeeksCalc);
  if (StartingRCInput) StartingRCInput.addEventListener('input', runWeeksCalc);

  // Any buff change should refresh time output
  function onBuffChange() {
    updateSpeedupOutput();
  }
  if (ConstructionSpeedInput) ConstructionSpeedInput.addEventListener('input', onBuffChange);
  if (DoubleTimeCheckbox) DoubleTimeCheckbox.addEventListener('change', onBuffChange);
  if (VicePresidentCheckbox) VicePresidentCheckbox.addEventListener('change', onBuffChange);
  if (AgnesLevelDropdown) AgnesLevelDropdown.addEventListener('change', onBuffChange);
  if (HyenaLevelDropdown) HyenaLevelDropdown.addEventListener('change', onBuffChange);

  function bindBuilding(towerType, fromDropdown, toDropdown, fcOutput, rcOutput) {
    const building = {
      fromDropdown,
      toDropdown,
      handler: null,

      totalFC: 0,
      totalRC: 0,

      totalTimeSeconds: 0,
      totalMeat: 0,
      totalWood: 0,
      totalCoal: 0,
      totalIron: 0,

      buildCount: 0, // NEW: (to-from)*5 for Agnes
    };

    const handler = () => {
      const fromValue = Number(fromDropdown.value);
      const toValue   = Number(toDropdown.value);

      const result =
        handleTowerChange({ towerType, fromDropdown, toDropdown, fcOutput, rcOutput }) || { FC: 0, RC: 0 };

      building.totalFC = result.FC;
      building.totalRC = result.RC;

      // Agnes compressed build count
      building.buildCount = (toValue > fromValue) ? (toValue - fromValue) * 5 : 0;

      if (fromValue > toValue) {
        building.totalTimeSeconds = 0;
        building.totalMeat = 0;
        building.totalWood = 0;
        building.totalCoal = 0;
        building.totalIron = 0;
      } else {
        const totals = computeTotalsForRange(fromValue, toValue, towerType);
        building.totalTimeSeconds = totals.time;
        building.totalMeat = totals.meat;
        building.totalWood = totals.wood;
        building.totalCoal = totals.coal;
        building.totalIron = totals.iron;
      }

      calculateGrandTotals();
    };

    building.handler = handler;

    fromDropdown.addEventListener('change', handler);
    toDropdown.addEventListener('change', handler);

    buildingRegistry.push(building);
  }

  function rerunAllBuildings() {
    buildingRegistry.forEach(b => b.handler());
  }

  function applyGlobalFrom(value) {
    buildingRegistry.forEach(({ fromDropdown }) => {
      fromDropdown.value = value;
    });
    rerunAllBuildings();
  }

  function applyGlobalTo(value) {
    buildingRegistry.forEach(({ toDropdown }) => {
      toDropdown.value = value;
    });
    rerunAllBuildings();
  }

  // ===== Bind all buildings =====
  bindBuilding('Furnace', FurnaceFromDropdown, FurnaceToDropdown, FurnaceFCText, FurnaceRCText);
  bindBuilding('Embassy', EmbassyFromDropdown, EmbassyToDropdown, EmbassyFCText, EmbassyRCText);

  bindBuilding('CommandCenter', CommandCenterFromDropdown, CommandCenterToDropdown, CommandCenterFCText, CommandCenterRCText);
  bindBuilding('InfantryCamp', InfantryCampFromDropdown, InfantryCampToDropdown, InfantryCampFCText, InfantryCampRCText);
  bindBuilding('LancerCamp', LancerCampFromDropdown, LancerCampToDropdown, LancerCampFCText, LancerCampRCText);
  bindBuilding('MarksmanCamp', MarksmanCampFromDropdown, MarksmanCampToDropdown, MarksmanCampFCText, MarksmanCampRCText);
  bindBuilding('Infirmary', InfirmaryFromDropdown, InfirmaryToDropdown, InfirmaryFCText, InfirmaryRCText);
  bindBuilding('WarAcademy', WarAcademyFromDropdown, WarAcademyToDropdown, WarAcademyFCText, WarAcademyRCText);

  // ===== Global dropdown listeners =====
  if (GlobalFromDropdown && GlobalToDropdown) {
    GlobalFromDropdown.addEventListener('change', () => {
      const fromV = Number(GlobalFromDropdown.value);
      const toV   = Number(GlobalToDropdown.value);

      if (fromV > toV) GlobalToDropdown.value = String(fromV);

      applyGlobalFrom(GlobalFromDropdown.value);
      applyGlobalTo(GlobalToDropdown.value);
    });

    GlobalToDropdown.addEventListener('change', () => {
      const fromV = Number(GlobalFromDropdown.value);
      const toV   = Number(GlobalToDropdown.value);

      if (toV < fromV) GlobalFromDropdown.value = String(toV);

      applyGlobalFrom(GlobalFromDropdown.value);
      applyGlobalTo(GlobalToDropdown.value);
    });
  }

  // ===== Initialize outputs =====
  function initOutputs(...elements) {
    elements.forEach(el => {
      if (!el) return;
      el.textContent = 0;
    });
  }

  initOutputs(
    FurnaceFCText, FurnaceRCText,
    EmbassyFCText, EmbassyRCText,
    CommandCenterFCText, CommandCenterRCText,
    InfantryCampFCText, InfantryCampRCText,
    LancerCampFCText, LancerCampRCText,
    MarksmanCampFCText, MarksmanCampRCText,
    InfirmaryFCText, InfirmaryRCText,
    WarAcademyFCText, WarAcademyRCText,
    TotalFCText, TotalRCText,
    RCOutputText, FCOutputText,
    ...DayOutputs,
    WeeklyCostNoDiscountText,
    WeeklyCostWithDiscountText,
    TotalCostNoDiscountText,
    TotalCostWithDiscountText,
    SpeedupOutputText,
    WoodOutputText,
    MeatOutputText,
    CoalOutputText,
    IronOutputText
  );

  // initial sync
  if (GlobalFromDropdown && GlobalToDropdown) {
    applyGlobalFrom(GlobalFromDropdown.value);
    applyGlobalTo(GlobalToDropdown.value);
  }

  // totals correct on load
  rerunAllBuildings();

  // ensure speedup reflects buffs immediately on load
  updateSpeedupOutput();
});
