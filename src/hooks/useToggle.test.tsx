import { renderHook, act } from "@testing-library/react-hooks";
import { useToggle } from "../hooks/useToggle";

describe("useToggle", () => {
  it("should toggle value correctly", () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current.value).toBe(false);
    
    act(() => {
      result.current.toggle();
    });

    expect(result.current.value).toBe(true);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.value).toBe(false);
  });

  it("should set value to true correctly", () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current.value).toBe(false);

    act(() => {
      result.current.setTrue();
    });

    expect(result.current.value).toBe(true);
  });

  it("should set value to false correctly", () => {
    const { result } = renderHook(() => useToggle(true));

    expect(result.current.value).toBe(true);

    act(() => {
      result.current.setFalse();
    });

    expect(result.current.value).toBe(false);
  });
});
