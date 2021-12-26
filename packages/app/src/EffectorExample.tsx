import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { createStore, createEvent, createEffect, forward } from "effector";
import { useStore } from "effector-react";

const init = createEvent();
const increment = createEvent();
const decrement = createEvent();
const reset = createEvent();

const fetchCountFromAsyncStorageFx = createEffect({
  async handler() {
    const value = parseInt((await AsyncStorage.getItem("count")) || "");
    return !isNaN(value) ? value : 0;
  },
});

const updateCountInAsyncStorageFx = createEffect({
  async handler(count: any) {
    try {
      await AsyncStorage.setItem("count", `${count}`, (err) => {
        if (err) console.error(err);
      });
    } catch (err) {
      console.error(err);
    }
  },
});

fetchCountFromAsyncStorageFx.doneData.watch((result: any) => {
  init(result);
});

const counter = createStore(0)
  .on(increment, (state) => state + 1)
  .on(decrement, (state) => state - 1)
  .on(init, (state, value) => value)
  .reset(reset);

forward({
  from: counter,
  to: updateCountInAsyncStorageFx,
});

fetchCountFromAsyncStorageFx();

export const EffectorExample = () => {
  const count = useStore(counter);
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{count}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          key="dec"
          // @ts-expect-error :((
          onPress={decrement}
          style={styles.button}
        >
          <Text style={styles.label}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          key="reset"
          // @ts-expect-error :((
          onPress={reset}
          style={styles.button}
        >
          <Text style={styles.label}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          key="inc"
          // @ts-expect-error :((
          onPress={increment}
          style={styles.button}
        >
          <Text style={styles.label}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 20,
    marginTop: 20,
  },
  paragraph: {
    marginBottom: 24,
    fontSize: 60,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttons: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  button: {
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#4287f5",
    borderRadius: 5,
  },
  label: {
    fontSize: 30,
    color: "#ffffff",
    fontWeight: "bold",
  },
});
